import React, { useState } from 'react';
import ProfilePicture from '../assets/images/me-picture.webp';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download } from "lucide-react";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="home" className="min-h-screen px-4 lg:px-20 flex items-center justify-center bg-gradient-to-b from-background via-background/90 to-background/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-50"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          className="relative mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.img
            src={ProfilePicture}
            alt="Profile picture"
            className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-primary shadow-lg relative z-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.1 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          />
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-background/80 backdrop-blur-sm p-2 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <p className="text-sm font-medium">Hello there! 👋</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="mt-2 mb-4 space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.p 
            className="text-xl text-primary font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Hey, I'm Francesco
          </motion.p>
          <motion.h1 
            className="text-3xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-300% animate-gradient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Full Stack Developer
          </motion.h1>
          <motion.p 
            className="mb-8 max-w-2xl mx-auto text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            As a devoted traveler, I've discovered that the web is an infinite world to explore, 
            just as much as the places I've visited.
            <br />
            Keep scrolling to delve into the projects I've created while journeying between the real and digital worlds.
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            <a href="https://www.linkedin.com/in/francesco-vitale--/" target="_blank" rel="noopener noreferrer" className="group">
              <div className="content-icon group-hover:bg-primary/20 transition-colors duration-300 relative overflow-hidden">
                <Linkedin size={24} className="relative z-10 group-hover:text-primary transition-colors duration-300" />
                <motion.div
                  className="absolute inset-0 bg-primary/10"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </a>
            <a href="https://github.com/francescovitale-dev" target="_blank" rel="noopener noreferrer" className="group">
              <div className="content-icon group-hover:bg-primary/20 transition-colors duration-300 relative overflow-hidden">
                <Github size={24} className="relative z-10 group-hover:text-primary transition-colors duration-300" />
                <motion.div
                  className="absolute inset-0 bg-primary/10"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </a>
          </motion.div>
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground group relative overflow-hidden">
              <a href="https://github.com/francescovitale-dev/portoflio-website/raw/main/src/assets/images/francescovitale-cv.pdf" download className="flex items-center">
                <Download size={18} className="mr-2 relative z-10" /> 
                <span className="relative z-10">Download Resume</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-primary to-secondary"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </section>
  );
}

export default Home;