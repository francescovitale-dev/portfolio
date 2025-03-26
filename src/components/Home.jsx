import { useState } from 'react';
import ProfilePicture from '../assets/images/me-picture1.webp';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Calendar } from "lucide-react";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const profileVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 8,
        delay: 0.2
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  return (
    <section id="home" className="min-h-screen px-4 lg:px-20 flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_65%)]" />
      
      <motion.div 
        className="absolute inset-0 bg-grid-white/[0.01] bg-[size:40px_40px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ backgroundPosition: '0% 0%' }}
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ 
          duration: 20, 
          ease: "linear", 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, var(--primary), transparent 800px)',
          backgroundSize: '100% 100%'
        }}
      />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row md:items-center md:gap-12 lg:gap-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div
            className="relative mb-6 md:mb-0 flex-shrink-0 mx-auto md:mx-0"
            variants={itemVariants}
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/10 rounded-full blur-xl opacity-70"
              animate={{
                scale: [1, 1.1, 1],
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
              className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover border border-primary/20 shadow-sm relative z-10"
              variants={profileVariants}
              whileHover="hover"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            />
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-background/90 border border-border/20 backdrop-blur-md px-4 py-2 rounded-full shadow-sm"
                  initial={{ opacity: 0, y: -10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -5, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <p className="text-sm font-medium whitespace-nowrap">Hello there 👋</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Content */}
          <div className="flex flex-col text-center md:text-left space-y-4 md:space-y-7">
            <motion.div variants={itemVariants} className="mx-auto md:mx-0">
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-2"
                initial={{ backgroundPosition: '0% 50%' }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 8, repeat: Infinity, repeatDelay: 5 }}
                style={{
                  backgroundImage: 'linear-gradient(90deg, var(--foreground), var(--primary), var(--foreground))',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Francesco Vitale
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl lg:text-2xl text-primary font-medium"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Software Developer
              </motion.p>
            </motion.div>

            <motion.p 
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0"
              variants={itemVariants}
            >
              Building modern web applications with clean, efficient code. Focused on creating 
              intuitive and responsive user experiences.
            </motion.p>

            <motion.div 
              className="flex justify-center md:justify-start space-x-8 pt-1"
              variants={itemVariants}
            >
              <motion.a 
                href="https://www.linkedin.com/in/francesco-vitale--/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3, transition: { type: "spring", stiffness: 300 } }}
              >
                <Linkedin size={24} className="text-muted-foreground hover:text-primary transition-colors" />
              </motion.a>
              <motion.a 
                href="https://github.com/francescovitale-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3, transition: { type: "spring", stiffness: 300 } }}
              >
                <Github size={24} className="text-muted-foreground hover:text-primary transition-colors" />
              </motion.a>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row pt-2 gap-3 items-center justify-center md:justify-start"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} className="w-full sm:w-auto">
                <Button asChild variant="outline" size="lg" className="rounded-full overflow-hidden relative h-12 px-6 w-full sm:w-auto">
                  <a href="https://github.com/francescovitale-dev/portfolio/raw/main/src/assets/images/francescovitale-cv.pdf" download className="flex items-center justify-center">
                    <Download size={18} className="mr-2" /> 
                    <span className="text-base">Resume</span>
                    <motion.div
                      className="absolute inset-0 bg-primary/10"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </a>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} className="w-full sm:w-auto">
                <Button asChild size="lg" className="rounded-full bg-primary/90 hover:bg-primary overflow-hidden relative h-12 px-6 w-full sm:w-auto">
                  <a href="https://calendly.com/francesco-vitale" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <Calendar size={18} className="mr-2" /> 
                    <span className="text-base">Schedule a call</span>
                    <motion.div
                      className="absolute inset-0 bg-white/10"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;