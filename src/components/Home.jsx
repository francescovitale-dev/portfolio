import { useState } from 'react';
import ProfilePicture from '../assets/images/me-picture1.webp';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Calendar } from "lucide-react";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
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
    <section id="home" className="min-h-screen px-4 lg:px-16 flex items-center justify-center bg-black text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:50px_50px]" />
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-40"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row md:items-center md:gap-8 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div
            className="relative mb-4 md:mb-0 flex-shrink-0 mx-auto md:mx-0"
            variants={itemVariants}
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl"
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
              className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/20 shadow-lg relative z-10"
              variants={profileVariants}
              whileHover="hover"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            />
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-lg shadow-lg"
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
          <div className="flex flex-col text-center md:text-left space-y-3">
            <motion.div variants={itemVariants}>
              <motion.p 
                className="text-lg text-primary font-semibold mb-1"
                variants={itemVariants}
              >
                Hey, I'm Francesco
              </motion.p>
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-300% animate-gradient"
                variants={itemVariants}
              >
                Software Developer
              </motion.h1>
            </motion.div>

            <motion.p 
              className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0"
              variants={itemVariants}
            >
              Building modern web applications with clean, efficient code. Focused on creating 
              intuitive and responsive user experiences that solve real-world problems.
            </motion.p>

            <motion.div 
              className="flex justify-center md:justify-start space-x-4 pt-1"
              variants={itemVariants}
            >
              <a href="https://www.linkedin.com/in/francesco-vitale--/" target="_blank" rel="noopener noreferrer" className="group">
                <div className="p-2 rounded-full group-hover:bg-primary/20 transition-colors duration-300 relative overflow-hidden">
                  <Linkedin size={22} className="relative z-10 group-hover:text-primary transition-colors duration-300" />
                  <motion.div
                    className="absolute inset-0 bg-primary/10"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </a>
              <a href="https://github.com/francescovitale-dev" target="_blank" rel="noopener noreferrer" className="group">
                <div className="p-2 rounded-full group-hover:bg-primary/20 transition-colors duration-300 relative overflow-hidden">
                  <Github size={22} className="relative z-10 group-hover:text-primary transition-colors duration-300" />
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
              className="flex flex-col sm:flex-row pt-2 gap-3 items-center justify-center md:justify-start"
              variants={itemVariants}
            >
              <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground rounded-md group relative overflow-hidden">
                <a href="https://calendly.com/vitalefrancesco/30min" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Calendar size={16} className="mr-2 relative z-10" /> 
                  <span className="relative z-10">Schedule a Call</span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}

export default Home;