
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-calm-blue/30 to-background pt-16 pb-32 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                A gentle space for your <span className="text-primary">emotional wellness</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                You're not alone. Let's check in with your emotions — gently. Track your moods, reflect on patterns, and nurture your mental well-being.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/chat">
                  <Button size="lg" className="rounded-full px-8">
                    Start Chatting
                  </Button>
                </Link>
                <Link to="#how-it-works">
                  <Button size="lg" variant="outline" className="rounded-full px-8">
                    Learn How It Works
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground">
                Not a replacement for professional therapy. Your data stays private and secure.
              </p>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="absolute -inset-0.5 bg-gradient-calm rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-card rounded-3xl p-6 shadow-xl border border-border">
                <img 
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800&h=600" 
                  alt="Peaceful mountain landscape" 
                  className="rounded-2xl w-full h-auto mb-6"
                />
                <div className="space-y-4 text-left">
                  <h3 className="text-xl font-medium">Today's Check-in</h3>
                  <p className="text-muted-foreground">How are you feeling today? Take a moment to reflect and track your emotional state.</p>
                  <div className="flex flex-wrap gap-2 py-2">
                    <div className="h-12 w-12 rounded-full bg-calm-blue flex items-center justify-center text-lg">😊</div>
                    <div className="h-12 w-12 rounded-full bg-calm-green flex items-center justify-center text-lg">😌</div>
                    <div className="h-12 w-12 rounded-full bg-calm-peach flex items-center justify-center text-lg">😐</div>
                    <div className="h-12 w-12 rounded-full bg-calm-lilac flex items-center justify-center text-lg">😔</div>
                    <div className="h-12 w-12 rounded-full bg-calm-lavender flex items-center justify-center text-lg">😤</div>
                  </div>
                  <Link to="/check-in">
                    <Button className="w-full">Check In Now</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How MindEase Works</h2>
            <p className="text-muted-foreground">
              Our approach focuses on daily reflection and mindful awareness to help you understand your emotional patterns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <div className="h-12 w-12 rounded-full bg-calm-blue flex items-center justify-center text-lg mb-5">1</div>
              <h3 className="text-xl font-medium mb-3">Daily Check-ins</h3>
              <p className="text-muted-foreground">
                Take a moment each day to reflect on your feelings and record your emotional state with our intuitive interface.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <div className="h-12 w-12 rounded-full bg-calm-green flex items-center justify-center text-lg mb-5">2</div>
              <h3 className="text-xl font-medium mb-3">Track Your Patterns</h3>
              <p className="text-muted-foreground">
                Over time, discover meaningful patterns in your emotional well-being through visualizations and gentle insights.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <div className="h-12 w-12 rounded-full bg-calm-lilac flex items-center justify-center text-lg mb-5">3</div>
              <h3 className="text-xl font-medium mb-3">Build Self-Awareness</h3>
              <p className="text-muted-foreground">
                Develop a deeper understanding of your emotional triggers and responses to nurture your mental well-being.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-calm-beige/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              MindEase provides tools to help you understand and nurture your emotional well-being.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-calm-blue flex items-center justify-center shrink-0">
                  <span className="text-lg">🧘</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Daily Mood Check-ins</h3>
                  <p className="text-muted-foreground">
                    Record your emotions and reflect on your day with our intuitive mood tracking interface.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-calm-green flex items-center justify-center shrink-0">
                  <span className="text-lg">📊</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Visual Insights</h3>
                  <p className="text-muted-foreground">
                    View your emotional patterns through beautiful visualizations that help you understand your trends.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-calm-peach flex items-center justify-center shrink-0">
                  <span className="text-lg">📝</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Journal Entries</h3>
                  <p className="text-muted-foreground">
                    Write about your day, thoughts, and feelings in a secure digital journal.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-calm-lilac flex items-center justify-center shrink-0">
                  <span className="text-lg">🔐</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Privacy Focused</h3>
                  <p className="text-muted-foreground">
                    Your data is encrypted and private—we take your security and confidentiality seriously.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] lg:h-[500px]">
              <div className="absolute -inset-1 bg-gradient-serene rounded-3xl blur-xl opacity-50"></div>
              <div className="relative h-full w-full bg-card rounded-3xl overflow-hidden border border-border">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                  alt="Person using MindEase app" 
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 px-6">
        <div className="container max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-calm rounded-3xl blur-xl opacity-40"></div>
            <div className="relative bg-card rounded-3xl p-10 md:p-16 text-center border border-border shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Start Your Emotional Wellness Journey
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Begin developing greater self-awareness through daily emotional check-ins with MindEase.
              </p>
              <Link to="/chat">
                <Button size="lg" className="rounded-full px-10">
                  Start Chatting Now
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground mt-6">
                Your privacy is our priority.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
