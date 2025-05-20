
import React, { useState, useRef, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { MessageCircle, SendIcon } from "lucide-react";

type Message = {
  id?: number;
  text: string;
  sender: "user" | "bot";
  timestamp: string;
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Add a welcome message when the component mounts
    setMessages([
      {
        text: "Hello! I'm your MindEase assistant. How are you feeling today?",
        sender: "bot",
        timestamp: new Date().toISOString(),
      },
    ]);
    
    // Load chat history from Supabase
    loadChatHistory();
  }, []);

  useEffect(() => {
    // Scroll to bottom whenever messages change
    scrollToBottom();
  }, [messages]);

  const loadChatHistory = async () => {
    try {
      // Get messages from the past 30 days
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      
      const { data, error } = await supabase
        .from('chat_messages')
        .select('*')
        .gte('timestamp', thirtyDaysAgo.toISOString())
        .order('timestamp', { ascending: true });
      
      if (error) throw error;
      
      if (data && data.length > 0) {
        // Only append messages if we have some history
        setMessages(prevMessages => [
          ...prevMessages,
          ...data.map(msg => ({
            id: msg.id,
            text: msg.text,
            sender: msg.sender,
            timestamp: msg.timestamp,
          })),
        ]);
      }
    } catch (error) {
      console.error("Error loading chat history:", error);
      toast({
        title: "Could not load chat history",
        description: "Please try again later",
      });
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const saveToChatHistory = async (message: Message) => {
    try {
      const { error } = await supabase
        .from('chat_messages')
        .insert([
          {
            text: message.text,
            sender: message.sender,
            timestamp: message.timestamp,
          },
        ]);
      
      if (error) throw error;
    } catch (error) {
      console.error("Error saving message:", error);
      toast({
        title: "Could not save message",
        description: "Your message was sent but not saved for history",
      });
    }
  };

  const getBotResponse = async (userMessage: string): Promise<string> => {
    // Basic bot responses
    const responses = [
      "I understand how you're feeling. Would you like to share more?",
      "That's interesting. How does that make you feel?",
      "Thank you for sharing that with me. Is there anything specific about it that concerns you?",
      "I'm here to listen. Would you like to explore these feelings further?",
      "It sounds like you've been going through a lot. How can I help support you today?",
      "That's completely valid. Many people experience similar feelings.",
      "I appreciate your openness. Let's work through this together.",
      "Have you tried any techniques that have helped with this in the past?",
    ];
    
    // Return a random response
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      text: input.trim(),
      sender: "user",
      timestamp: new Date().toISOString(),
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput("");
    setIsLoading(true);
    
    // Save user message to Supabase
    await saveToChatHistory(userMessage);
    
    try {
      // Get bot response
      const botResponseText = await getBotResponse(input);
      
      // Add bot message after a small delay to simulate thinking
      setTimeout(() => {
        const botMessage: Message = {
          text: botResponseText,
          sender: "bot",
          timestamp: new Date().toISOString(),
        };
        
        setMessages(prevMessages => [...prevMessages, botMessage]);
        setIsLoading(false);
        
        // Save bot message to Supabase
        saveToChatHistory(botMessage);
      }, 1000);
    } catch (error) {
      console.error("Error getting bot response:", error);
      setIsLoading(false);
      toast({
        title: "Could not get response",
        description: "Please try again later",
      });
    }
  };

  return (
    <Layout>
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Chat with MindEase</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Share how you're feeling and get supportive responses. Your chat history is saved for 30 days.
          </p>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-sm border border-border h-[60vh] flex flex-col">
          <div className="flex-grow overflow-y-auto mb-4 pr-2">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <p>{message.text}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {new Date(message.timestamp).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted max-w-[75%] rounded-2xl px-4 py-2">
                    <div className="flex space-x-2">
                      <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce"></div>
                      <div className="h-2 w-2 rounded-full bg-muted-foreground animation-delay-300 animate-bounce"></div>
                      <div className="h-2 w-2 rounded-full bg-muted-foreground animation-delay-600 animate-bounce"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="flex items-end gap-2">
            <Textarea
              placeholder="Type your message..."
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              className="resize-none min-h-[60px]"
            />
            <Button
              onClick={handleSendMessage}
              className="h-10 w-10 p-0"
              disabled={isLoading || !input.trim()}
            >
              <SendIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>
            Remember, this is not a replacement for professional mental health support.
            If you're experiencing severe distress, please reach out to a qualified professional.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Chat;
