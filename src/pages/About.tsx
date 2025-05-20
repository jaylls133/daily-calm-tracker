
import React from "react";
import Layout from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const About = () => {
  return (
    <Layout>
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About MindEase</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Learn more about our approach to emotional wellness and how we support your journey.
          </p>
        </div>

        <div className="bg-card rounded-xl p-8 shadow-sm border border-border mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-6">
            MindEase was created with a simple but powerful mission: to help people develop greater emotional awareness through regular reflection and mindful tracking.
          </p>
          <p className="text-muted-foreground mb-6">
            We believe that understanding your emotional patterns is a key step toward overall well-being. By providing simple tools for daily mood tracking and reflection, we aim to make emotional self-care an accessible practice for everyone.
          </p>
          <div className="p-4 bg-muted rounded-lg border border-border">
            <p className="font-medium text-foreground">
              <strong>Important Note:</strong> MindEase is not a therapeutic tool or mental health service. We offer a self-reflection tool that complements, but does not replace, professional mental health support.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is my data private?</AccordionTrigger>
              <AccordionContent>
                Yes, your privacy is our priority. Your data is encrypted and stored securely. We never share or sell your personal information or journal entries to third parties.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How often should I check in?</AccordionTrigger>
              <AccordionContent>
                We recommend daily check-ins for the best insights into your emotional patterns. However, any consistent schedule that works for you will provide valuable self-awareness.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can MindEase help with mental health conditions?</AccordionTrigger>
              <AccordionContent>
                MindEase is designed for general emotional wellness and self-reflection. It is not a diagnostic tool or treatment for mental health conditions. If you're experiencing symptoms of a mental health condition, please consult with a qualified healthcare professional.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How do I delete my account?</AccordionTrigger>
              <AccordionContent>
                You can delete your account and all associated data from the Settings page. Once deleted, all your information will be permanently removed from our systems.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
          <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
          <p className="text-muted-foreground mb-6">
            If you have questions or need support with using MindEase, please contact our support team.
          </p>
          <p className="font-medium">
            Email: support@mindease.example.com
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
