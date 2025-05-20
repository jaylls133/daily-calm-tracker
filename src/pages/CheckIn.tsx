
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

type Mood = {
  emoji: string;
  label: string;
  color: string;
};

const moods: Mood[] = [
  { emoji: "😊", label: "Happy", color: "bg-calm-blue" },
  { emoji: "😌", label: "Calm", color: "bg-calm-green" },
  { emoji: "😐", label: "Neutral", color: "bg-calm-beige" },
  { emoji: "😔", label: "Sad", color: "bg-calm-lilac" },
  { emoji: "😤", label: "Frustrated", color: "bg-calm-lavender" },
  { emoji: "😰", label: "Anxious", color: "bg-calm-peach" },
];

const CheckIn = () => {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [journalEntry, setJournalEntry] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!selectedMood) {
      toast({
        title: "Please select a mood",
        description: "Choose how you're feeling today to complete your check-in",
      });
      return;
    }

    setIsSubmitting(true);

    // This would be replaced with actual API call to save the check-in
    setTimeout(() => {
      toast({
        title: "Check-in saved",
        description: "Your mood and journal entry have been recorded. Great job on your self-reflection!",
      });
      setIsSubmitting(false);
      // Reset form or redirect
    }, 1000);
  };

  return (
    <Layout>
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Daily Check-In</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Take a moment to reflect on how you're feeling today. This simple practice can help build emotional awareness.
          </p>
        </div>

        <div className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border">
          <div className="mb-8">
            <h2 className="text-xl font-medium mb-4">How are you feeling today?</h2>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
              {moods.map((mood) => (
                <button
                  key={mood.label}
                  onClick={() => setSelectedMood(mood)}
                  className={`h-16 w-full rounded-xl flex flex-col items-center justify-center gap-1 transition-all ${
                    selectedMood?.label === mood.label
                      ? `${mood.color} ring-2 ring-primary`
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  <span className="text-2xl">{mood.emoji}</span>
                  <span className="text-xs font-medium">{mood.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-medium mb-4">Journal Entry (Optional)</h2>
            <Textarea
              placeholder="How has your day been? What's on your mind?"
              className="min-h-[150px]"
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
            />
          </div>

          <div className="flex justify-end">
            <Button onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save Check-In"}
            </Button>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            Remember, this is a tool for self-reflection, not a replacement for professional mental health support.
          </p>
          <p className="mt-2">
            If you're experiencing severe distress, please reach out to a qualified mental health professional.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default CheckIn;
