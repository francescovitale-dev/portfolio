import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Briefcase, Award, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedLine from "./AnimatedLine";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const controls = useAnimation();

  // Timeline data
  const timelineData = [
    {
      type: "experience",
      title: "Software Developer",
      organization: "Poseidon s.b.",
      subtitle: "Internship",
      period: "October 2024 - Present",
      location: "Catania, Sicily, Italy",
      icon: Briefcase,
      color: "bg-chart-1/20 text-chart-1",
      borderColor: "border-chart-1/30",
    },
    {
      type: "education",
      title: "Bachelor's Degree in Computer Science",
      organization: "OPIT - Open Institute of Technology",
      period: "September 2024 - 2027",
      icon: BookOpen,
      color: "bg-chart-2/20 text-chart-2",
      borderColor: "border-chart-2/30",
    },
    {
      type: "education",
      title: "Full Stack Development",
      organization: "START2IMPACT",
      period: "September 2023 - April 2024",
      description: "Score: 1500/1500",
      link: "https://raw.githubusercontent.com/francescovitale-dev/portfolio/dev/src/assets/images/master-attestato.png",
      icon: Award,
      color: "bg-chart-3/20 text-chart-3",
      borderColor: "border-chart-3/30",
    },
    {
      type: "certification",
      title: "CS50x",
      organization: "Harvard Online",
      period: "May 2024",
      description: "Algorithms, Data Structures, C, Python, SQL",
      link: "https://certificates.cs50.io/c52b5631-c7db-4e86-81d3-866b3cd17f83.png?size=letter",
      icon: Award,
      color: "bg-chart-4/20 text-chart-4",
      borderColor: "border-chart-4/30",
    }
  ];

  // Auto-rotate between timeline items
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % timelineData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [timelineData.length]);

  // Start animations when section is in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Navigation handlers
  const handlePrevious = () => {
    setActiveIndex((current) => 
      current === 0 ? timelineData.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((current) => 
      (current + 1) % timelineData.length
    );
  };

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9, 
      y: -20,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15 
      }
    }
  };

  const controlsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 0.4,
        duration: 0.5
      }
    }
  };

  return (
    <section 
      id="about" 
      className="py-24 md:py-32 bg-background relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_bottom_right,_var(--primary)_0%,_transparent_70%)]" />
      
      <motion.div 
        className="absolute inset-0 bg-grid-white/[0.01] bg-[size:40px_40px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      <motion.div
        className="absolute bottom-0 right-0 opacity-10 w-full h-full"
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
          backgroundImage: 'radial-gradient(circle at 80% 80%, var(--primary), transparent 800px)',
          backgroundSize: '100% 100%'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={controls}
          className="mb-16 md:mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-medium text-center"
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
            My Journey
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground text-center mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            A timeline of my education, experience, and professional development
          </motion.p>
        </motion.div>

        <div className="relative min-h-[500px]">
          {/* Timeline Card */}
          <div className="flex justify-center items-center">
            <AnimatePresence mode="wait">
              {timelineData.map((item, index) => {
                const Icon = item.icon;
                if (index !== activeIndex) return null;
                
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="w-full max-w-3xl"
                  >
                    <Card className="group overflow-hidden border border-border/50 bg-background/80 backdrop-blur-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                      <div className="p-8 relative h-full flex flex-col">
                        {/* Decorative gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/0 pointer-events-none" />
                        
                        {/* Category badge */}
                        <div className="mb-6 relative">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${item.color} ${item.borderColor} border uppercase tracking-wider`}>
                            {item.type}
                          </span>
                        </div>
                        
                        {/* Header with icon and period */}
                        <div className="flex items-center gap-4 mb-5 relative">
                          <motion.div 
                            className={`p-4 rounded-2xl ${item.color}`}
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <Icon className="w-6 h-6" />
                          </motion.div>
                          <div>
                            <time className="text-base font-medium text-muted-foreground block">
                              {item.period}
                            </time>
                            {item.location && (
                              <span className="text-sm text-muted-foreground/80">
                                {item.location}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Main content */}
                        <div className="flex-1 relative">
                          <h3 className="text-2xl font-bold mb-3 text-foreground">
                            {item.title}
                          </h3>

                          <p className="text-lg font-medium mb-2 text-foreground/90">
                            {item.organization}
                          </p>

                          {item.subtitle && (
                            <p className="text-base text-muted-foreground mb-2">
                              {item.subtitle}
                            </p>
                          )}

                          {item.description && (
                            <p className="text-base text-muted-foreground">
                              {item.description}
                            </p>
                          )}
                        </div>

                        {/* Certificate link if available */}
                        {item.link && (
                          <div className="mt-6 relative">
                            <Button
                              variant="outline"
                              size="lg"
                              asChild
                              className={`${item.borderColor} hover:${item.color} transition-colors duration-300 relative overflow-hidden group`}
                            >
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                              >
                                <span className="mr-2 relative z-10">View Certificate</span>
                                <ExternalLink className="w-4 h-4 relative z-10" />
                                <motion.div
                                  className={`absolute inset-0 ${item.color} opacity-0 group-hover:opacity-100`}
                                  initial={{ x: '-100%' }}
                                  whileHover={{ x: '0%' }}
                                  transition={{ duration: 0.3 }}
                                />
                              </a>
                            </Button>
                          </div>
                        )}
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation controls */}
          <motion.div 
            className="mt-12 flex items-center justify-center gap-4 md:gap-6"
            variants={controlsVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.button
              onClick={handlePrevious}
              className="p-2 rounded-full border border-border/50 bg-background/80 backdrop-blur-sm hover:border-primary/20 hover:bg-primary/5 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            
            <div className="flex justify-center gap-3">
              {timelineData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="group focus:outline-none"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <motion.div
                    className={`
                      relative h-3 rounded-full transition-all duration-300
                      ${activeIndex === index ? 'w-10 bg-primary' : 'w-3 bg-muted'}
                      hover:bg-primary/80
                    `}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  />
                </button>
              ))}
            </div>
            
            <motion.button
              onClick={handleNext}
              className="p-2 rounded-full border border-border/50 bg-background/80 backdrop-blur-sm hover:border-primary/20 hover:bg-primary/5 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default About;