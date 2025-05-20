
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-8 px-6 bg-muted/30">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">MindEase</h3>
            <p className="text-muted-foreground text-sm">
              A gentle space for daily emotional check-ins and self-reflection.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.nimh.nih.gov/health/find-help" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mental Health Resources
                </a>
              </li>
              <li>
                <a 
                  href="tel:988" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Crisis Support: 988
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MindEase. Not a replacement for professional mental health services.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
