import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  BookOpen, 
  Briefcase, 
  Award, 
  ChevronLeft, 
  ChevronRight,
  Star
} from "lucide-react";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const controls = useAnimation();

  // Marketing insight: Using storytelling to create an emotional connection
  const timelineData = [
    {
      type: "experience",
      title: "Coding Expert for AI Training",
      organization: "Scale AI",
      subtitle: "Freelance",
      period: "January 2025 - Present",
      location: "Remote",
      icon: Briefcase,
      color: "bg-chart-5/20 text-chart-5",
      borderColor: "border-chart-5/30",
      story: "Contributing to improving world-leading AI models through specialized coding RLHF training and evaluation. Creating technical prompts across multiple coding languages and locales to enhance AI model performance globally.",
      skills: ["JavaScript", "React.js", "RLHF", "AI Training", "Technical Prompting"]
    },
    {
      type: "experience",
      title: "Software Developer",
      organization: "Poseidon s.b.",
      subtitle: "Internship",
      period: "October 2024 - January 2025",
      location: "Catania, Sicily, Italy",
      icon: Briefcase,
      color: "bg-chart-1/20 text-chart-1",
      borderColor: "border-chart-1/30",
      story: "Worked closely with the team to implement new features, enhance workflows, and ensure eﬃcient system performance.",
      skills: ["SAP", "JavaScript", "Groovy", "REST APIs"]
    },
    {
      type: "education",
      title: "Bachelor's Degree in Computer Science",
      organization: "OPIT - Open Institute of Technology",
      period: "September 2024 - 2027",
      icon: BookOpen,
      color: "bg-chart-2/20 text-chart-2",
      borderColor: "border-chart-2/30",
      story: "Diving deep into algorithms, data structures, and modern software development practices while building practical applications that solve real-world problems.",
      skills: ["Algorithms", "Data Structures", "Software Architecture", "Database Design"]
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
      story: "Achieved perfect scores across all modules by developing practical projects that showcased both technical skills and creative problem-solving abilities.",
      skills: ["React", "Node.js", "MongoDB", "Express", "RESTful APIs"]
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
      story: "Mastered fundamentals of computer science through Harvard's rigorous program, building everything from low-level C applications to web apps with Python and JavaScript.",
      skills: ["C", "Python", "SQL", "JavaScript", "Data Structures"]
    }
  ];

  // Start animations when section is in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Navigation handlers
  const handlePrevious = () => {
    setAutoplay(false);
    setActiveIndex((current) => 
      current === 0 ? timelineData.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((current) => 
      (current + 1) % timelineData.length
    );
  };

  const handleDotClick = (index) => {
    setAutoplay(false);
    setActiveIndex(index);
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

  return (
    <section 
      id="about" 
      className="py-24 md:py-32 bg-background relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Visual elements for enhanced aesthetics */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_bottom_right,_var(--primary)_0%,_transparent_70%)]" />
      
      <motion.div 
        className="absolute inset-0 bg-grid-white/[0.01] bg-[size:40px_40px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      <motion.div
        className="absolute -bottom-40 -right-40 opacity-10 w-[800px] h-[800px]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: [0.8, 1.2, 0.8],
          opacity: [0, 0.1, 0],
        }}
        transition={{ 
          duration: 15, 
          ease: "easeInOut", 
          repeat: Infinity, 
          repeatType: "loop" 
        }}
        style={{
          backgroundImage: 'radial-gradient(circle, var(--primary), transparent 70%)',
          borderRadius: '100%'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading - Marketing insight: Clear value proposition */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={controls}
          className="mb-16 md:mb-20 text-center"
        >
          <Badge 
            variant="outline" 
            className="mb-4 px-4 py-2 text-xs font-semibold tracking-wider uppercase border-primary/20 bg-primary/5"
          >
            My Professional Journey
          </Badge>
        </motion.div>

        {/* Timeline Cards - Marketing insight: Storytelling creates emotional connection */}
        <div className="relative">
          
          {/* Timeline Card */}
          <div className="flex justify-center items-center min-h-[500px]">
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
                    className="w-full max-w-4xl"
                  >
                    <Card className="group overflow-hidden border border-border/50 bg-background/80 backdrop-blur-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500">
                      <CardHeader className="pb-4">
                        {/* Category badge */}
                        <div className="mb-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${item.color} ${item.borderColor} border uppercase tracking-wider`}>
                            {item.type}
                          </span>
                        </div>
                        
                        {/* Header with icon and period */}
                        <div className="flex items-center gap-4">
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
                      </CardHeader>
                      
                      <CardContent className="relative">
                        {/* Main content */}
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold mb-2 text-foreground">
                            {item.title}
                          </h3>

                          <p className="text-lg font-medium mb-3 text-foreground/90">
                            {item.organization}
                          </p>

                          {item.subtitle && (
                            <p className="text-base text-muted-foreground mb-2">
                              {item.subtitle}
                            </p>
                          )}

                          {item.description && (
                            <p className="text-base text-muted-foreground mb-4">
                              {item.description}
                            </p>
                          )}

                          {/* Marketing insight: Personal storytelling creates emotional connection */}
                          <div className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/10">
                            <p className="text-sm italic text-foreground/80 leading-relaxed">
                              "{item.story}"
                            </p>
                          </div>
                        </div>

                        {/* Skills used/learned - Keyword optimization for SEO */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skillIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 + skillIndex * 0.1 }}
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.color} border ${item.borderColor}`}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </CardContent>
                      
                      <CardFooter className="flex flex-wrap gap-4 justify-between pt-0">
                        {/* Certificate link if available */}
                        {item.link && (
                          <Button
                            variant="outline"
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
                        )}
                        
                        {/* Call-to-action - Marketing insight: Clear CTA */}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => {
                            const contactSection = document.getElementById('contact');
                            if (contactSection) {
                              contactSection.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                        >
                          <Star className="mr-1 h-3 w-3" /> Interested in working together?
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation controls */}
          <motion.div 
            className="mt-12 flex items-center justify-center gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button
              onClick={handlePrevious}
              className="p-2 rounded-full border border-border/50 bg-background/80 backdrop-blur-sm hover:border-primary/20 hover:bg-primary/5 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous item"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            
            <div className="flex justify-center gap-3">
              {timelineData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
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
              aria-label="Next item"
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