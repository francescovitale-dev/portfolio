import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isHovered, setIsHovered] = useState(null);

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/vitale_francesco_/',
      icon: Instagram,
      color: 'hover:text-pink-500'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/francesco-vitale--/',
      icon: Linkedin,
      color: 'hover:text-blue-500'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/francescovitale-dev',
      icon: Github,
      color: 'hover:text-gray-500'
    }
  ];

  return (
    <footer className="bg-background border-t border-border py-6 relative overflow-hidden">
      {/* Subtle animated background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-30 z-0"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="text-sm text-muted-foreground mb-4 md:mb-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            © {currentYear} Francesco Vitale. All rights reserved.
          </motion.p>
          
          <div className="flex items-center">

            <motion.div 
              className="flex space-x-5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  onHoverStart={() => setIsHovered(index)}
                  onHoverEnd={() => setIsHovered(null)}
                  whileHover={{ y: -3 }}
                  className="relative"
                >
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`block transition-colors duration-300 text-muted-foreground ${link.color}`}
                    aria-label={link.name}
                  >
                    <link.icon size={20} />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;