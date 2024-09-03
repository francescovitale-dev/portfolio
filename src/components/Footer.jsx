import React from 'react';
import { Github, Linkedin, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-background border-t border-border py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 Francesco Vitale. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/vitale_francesco_/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/in/francesco-vitale--/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/francescovitale-dev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;