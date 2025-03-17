import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Briefcase, Award } from "lucide-react";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const timelineData = [
    {
      type: "experience",
      title: "Software Developer",
      organization: "Poseidon s.b.",
      subtitle: "Internship",
      period: "October 2024 - Present",
      location: "Catania, Sicily, Italy",
      icon: Briefcase,
    },
    {
      type: "education",
      title: "Bachelor's Degree in Computer Science",
      organization: "OPIT - Open Institute of Technology",
      period: "September 2024 - 2027",
      icon: BookOpen,
    },
    {
      type: "education",
      title: "Full Stack Development",
      organization: "START2IMPACT",
      period: "September 2023 - April 2024",
      description: "Score: 1500/1500",
      link: "https://raw.githubusercontent.com/francescovitale-dev/portfolio/dev/src/assets/images/master-attestato.png",
      icon: Award,
    },
    {
      type: "certification",
      title: "CS50x",
      organization: "Harvard Online",
      period: "May 2024",
      description: "Algorithms, Data Structures, C, Python, SQL",
      link: "https://certificates.cs50.io/c52b5631-c7db-4e86-81d3-866b3cd17f83.png?size=letter",
      icon: Award,
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % timelineData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="min-h-screen px-4 flex items-center justify-center py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-foreground"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Journey
        </motion.h2>

        <div className="relative min-h-[500px]">
          <div className="flex justify-center items-center">
            <AnimatePresence mode="wait">
              {timelineData.map((item, index) => {
                const Icon = item.icon;
                if (index !== activeIndex) return null;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="w-full max-w-2xl"
                  >
                    <Card className="group hover:shadow-lg transition-all duration-300 h-80">
                      <div className="p-8 relative h-full flex flex-col">
                        <div className="flex items-center gap-4 mb-4">
                          <motion.div 
                            className="p-3 rounded-2xl bg-primary text-primary-foreground"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <Icon className="w-6 h-6" />
                          </motion.div>
                          <time className="text-base font-medium text-muted-foreground">
                            {item.period}
                          </time>
                        </div>

                        <div className="flex-1">
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

                        {item.link && (
                          <div className="mt-4">
                            <Button
                              variant="outline"
                              size="lg"
                              asChild
                              className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                            >
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <span className="mr-2">View Certificate</span>
                                <ExternalLink className="w-4 h-4" />
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

          <div className="flex justify-center gap-3 mt-10">
            {timelineData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="group focus:outline-none"
              >
                <div className={`
                  relative h-3 rounded-full transition-all duration-500
                  ${activeIndex === index ? 'w-12 bg-primary' : 'w-3 bg-muted'}
                  hover:bg-primary/80
                `} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;