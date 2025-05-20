
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 border-b border-border/40 bg-background/80 backdrop-blur-sm z-10">
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-calm flex items-center justify-center">
            <span className="text-white font-semibold text-sm">ME</span>
          </div>
          <span className="font-medium text-xl text-foreground">MindEase</span>
        </Link>
        
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link to="/journal" className="text-muted-foreground hover:text-foreground transition-colors">
            Journal
          </Link>
          <Link to="/insights" className="text-muted-foreground hover:text-foreground transition-colors">
            Insights
          </Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <Link to="/auth">
            <Button variant="ghost">Log In</Button>
          </Link>
          <Link to="/auth?signup=true">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
