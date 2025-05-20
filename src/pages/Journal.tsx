
import React from "react";
import Layout from "@/components/layout/Layout";

const Journal = () => {
  return (
    <Layout>
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Journal</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Review your past check-ins and journal entries to reflect on your emotional journey.
          </p>
        </div>

        <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
          <div className="text-center">
            <p className="text-xl text-muted-foreground mb-4">
              Your journal entries will appear here.
            </p>
            <p className="text-muted-foreground">
              Start by completing your first daily check-in.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Journal;
