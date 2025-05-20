
import React from "react";
import Layout from "@/components/layout/Layout";

const Insights = () => {
  return (
    <Layout>
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Mood Insights</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Track patterns in your emotional well-being and gain insights into your moods over time.
          </p>
        </div>

        <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
          <div className="text-center">
            <p className="text-xl text-muted-foreground mb-4">
              Start tracking your moods to see your insights here.
            </p>
            <p className="text-muted-foreground">
              Check in daily to build a history of your emotional patterns.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Insights;
