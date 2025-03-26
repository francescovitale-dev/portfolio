import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, ArrowRight, MessageCircle, CheckCircle } from "lucide-react";

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
      className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)]" />
      
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

      <div className="container px-4 sm:px-6 relative z-10">
        
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto"
        >
          <Card 
            className="relative overflow-hidden border border-primary/10 bg-background/60 backdrop-blur-md shadow-xl"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            
            <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
                {/* Left side: Calendar Info */}
                <div className="text-left">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">Schedule a Call</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 md:mb-6">
                    Take the first step toward transforming your vision into reality. Let's discuss how I can help bring your ideas to life.
                  </p>
                  
                  {/* Value propositions with icons */}
                  <div className="space-y-2 sm:space-y-3 mb-4 md:mb-6">
                    <motion.div 
                      className="flex items-start gap-2 sm:gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-xs sm:text-sm">Tailored solutions that align with your business goals</p>
                    </motion.div>
                    <motion.div 
                      className="flex items-start gap-2 sm:gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.0 }}
                    >
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-xs sm:text-sm">Technical expertise with a focus on user experience</p>
                    </motion.div>
                    <motion.div 
                      className="flex items-start gap-2 sm:gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 }}
                    >
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-xs sm:text-sm">Clear communication throughout the entire process</p>
                    </motion.div>
                  </div>
                  
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
                      className="rounded-full text-sm sm:text-base font-medium group relative overflow-hidden w-full"
                    >
                      <a 
                        href="https://cal.com/francesco-vitale/30" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6"
                      >
                        <span>Book Your Free Consultation</span>
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
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
                
                {/* Right side: Floating Calendar Icon */}
                <div className="flex justify-center items-center relative h-40 sm:h-48 md:h-60">
                  <motion.div
                    className="absolute"
                    variants={floatingIconVariants}
                    initial="hidden"
                    animate={isInView ? ["visible", "float"] : "hidden"}
                  >
                    <div className="relative">
                      {/* Decorative blobs */}
                      <motion.div 
                        className="absolute -inset-8 sm:-inset-10 md:-inset-12 rounded-full bg-primary/5 blur-xl"
                        animate={{ 
                          scale: [1, 1.2, 1],
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity, 
                          repeatType: "reverse" 
                        }}
                      />
                      
                      <div className="relative bg-background/80 backdrop-blur-sm shadow-lg p-4 sm:p-5 md:p-6 rounded-xl border border-primary/10">
                        <Calendar className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 text-primary" />
                        
                        {/* Mini info box overlapping the icon */}
                        <motion.div 
                          className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-background border border-primary/20 px-2 py-1 md:px-3 md:py-1.5 rounded-lg shadow-lg text-xs sm:text-sm font-medium"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 1.3 }}
                        >
                          30-min Call
                        </motion.div>
                      </div>
                      
                      {/* Small orbit elements */}
                      <AnimatePresence>
                        {isHovering && (
                          <>
                            <motion.div 
                              className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-primary/20 p-1.5 md:p-2 rounded-full" 
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              transition={{ delay: 0.1 }}
                            >
                              <MessageCircle className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                            </motion.div>
                            <motion.div 
                              className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 bg-primary/20 p-1.5 md:p-2 rounded-full"
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              <Mail className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </div>
              </div>
            
            </CardContent>
            
            {/* Background design elements */}
            <div className="absolute -top-16 -right-16 sm:-top-20 sm:-right-20 md:-top-24 md:-right-24 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 sm:-bottom-24 sm:-left-24 md:-bottom-32 md:-left-32 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-primary/5 rounded-full blur-3xl"></div>
            
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