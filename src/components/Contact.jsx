import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, Github, Linkedin, ArrowRight, MessageCircle } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const controls = useAnimation();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Animation variants
  const cardVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 60,
        damping: 15,
        delay: 0.3
      }
    }
  };

  const floatingIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.8
      }
    },
    float: {
      y: [0, -15, 0],
      rotate: [0, -5, 0, 5, 0],
      transition: {
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        },
        rotate: {
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }
    }
  };
  
  return (
    <section 
      id="contact" 
      className="py-24 md:py-32 bg-background relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)]" />
      
      <motion.div 
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4wMSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMi0yaDF2MWgtMXYtMXptLTItMmgxdjFoLTF2LTF6bS0yIDEyaDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMi0yaDF2MWgtMXYtMXptLTItMmgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-[size:60px_60px] bg-opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      />
      
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        style={{
          background: "linear-gradient(to right, transparent, var(--primary-foreground) 80%, transparent)",
          backgroundSize: "200% 200%",
          animation: "wave 8s ease infinite",
        }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="mb-16 md:mb-20 text-center"
        >
          <motion.span 
            className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Ready when you are
          </motion.span>
          
          <motion.h2 
            className="text-5xl md:text-6xl font-bold"
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
            Let's Connect
          </motion.h2>
        </motion.div>
        
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={controls}
          className="max-w-3xl mx-auto"
        >
          <Card 
            className="relative overflow-hidden border border-primary/10 bg-background/60 backdrop-blur-md shadow-xl"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <CardContent className="p-10 md:p-12 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left side: Calendar Info */}
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Schedule a Call</h3>
                  <p className="text-muted-foreground mb-6 md:pr-6">
                    Book a time directly on my calendar. Let's discuss your project, explore collaboration opportunities, or just chat about technology.
                  </p>
                  
                  <div className="flex flex-col gap-4 md:items-start items-center">
                    
                    <motion.div 
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 } 
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        asChild 
                        size="lg" 
                        className="rounded-full text-base font-medium group relative overflow-hidden"
                      >
                        <a 
                          href="https://calendly.com/francesco-vitale" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 px-8 py-6"
                        >
                          <span>Open My Calendar</span>
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          <motion.div
                            className="absolute inset-0 bg-primary/10"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.4 }}
                          />
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </div>
                
                {/* Right side: Floating Calendar Icon */}
                <div className="flex justify-center relative h-60">
                  <motion.div
                    className="absolute"
                    variants={floatingIconVariants}
                    initial="hidden"
                    animate={isInView ? ["visible", "float"] : "hidden"}
                  >
                    <div className="relative">
                      {/* Decorative blobs */}
                      <motion.div 
                        className="absolute -inset-6 rounded-full bg-primary/5 blur-xl"
                        animate={{ 
                          scale: [1, 1.2, 1],
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity, 
                          repeatType: "reverse" 
                        }}
                      />
                      
                      <div className="relative bg-background/80 backdrop-blur-sm shadow-lg p-6 rounded-xl">
                        <Calendar className="w-24 h-24 text-primary" />
                      </div>
                      
                      {/* Small orbit elements */}
                      <AnimatePresence>
                        {isHovering && (
                          <>
                            <motion.div 
                              className="absolute -top-4 -right-4 bg-primary/20 p-2 rounded-full" 
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              transition={{ delay: 0.1 }}
                            >
                              <MessageCircle className="w-4 h-4 text-primary" />
                            </motion.div>
                            <motion.div 
                              className="absolute -bottom-4 -left-4 bg-primary/20 p-2 rounded-full"
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              <Mail className="w-4 h-4 text-primary" />
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Alternative contact options */}
              <motion.div 
                className="mt-12 pt-8 border-t border-primary/10 flex flex-wrap justify-center md:justify-between gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 1, duration: 0.4 }
                }}
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Email</span>
                  </div>
                  <a 
                    href="mailto:vitalefrancesco@email.com" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    vitalefrancesco@email.com
                  </a>
                </div>
                
                <div className="flex items-center gap-6">
                  <motion.a 
                    href="https://github.com/francescovitale-dev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-background/80 border border-border hover:border-primary/30 transition-colors"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  
                  <motion.a 
                    href="https://www.linkedin.com/in/francesco-vitale--/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-background/80 border border-border hover:border-primary/30 transition-colors"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                </div>
              </motion.div>
            </CardContent>
            
            {/* Background design elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
            
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-background/0 via-primary/5 to-background/0 opacity-0"
              animate={{ opacity: isHovering ? 0.5 : 0 }}
              transition={{ duration: 0.6 }}
            />
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;