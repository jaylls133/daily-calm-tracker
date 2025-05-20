
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const showSignup = searchParams.get("signup") === "true";
  const [activeTab, setActiveTab] = useState<string>(showSignup ? "signup" : "login");
  
  return (
    <Layout hideFooter>
      <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 py-12 bg-gradient-to-b from-background to-calm-blue/10">
        <div className="w-full max-w-lg">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-calm rounded-3xl blur-xl opacity-50"></div>
            <div className="relative bg-card rounded-3xl p-8 md:p-10 shadow-xl border border-border">
              <div className="text-center mb-8">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                  {activeTab === "login" ? "Welcome Back" : "Create Your Account"}
                </h1>
                <p className="text-muted-foreground">
                  {activeTab === "login" 
                    ? "Sign in to continue your emotional wellness journey"
                    : "Start tracking your emotions and build self-awareness"}
                </p>
              </div>
              
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-2 mb-8 w-full">
                  <TabsTrigger value="login">Log In</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login" className="mt-0 flex justify-center">
                  <LoginForm />
                </TabsContent>
                
                <TabsContent value="signup" className="mt-0 flex justify-center">
                  <SignupForm />
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-8">
            By using MindEase, you agree to our <a href="/terms" className="text-primary hover:underline">Terms of Service</a> and <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Auth;
