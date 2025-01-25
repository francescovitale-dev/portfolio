import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Briefcase, Award } from "lucide-react";

const CoolTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const timelineData = [
    {
      type: "experience",
      title: "Software Developer",
      organization: "Poseidon s.b.",
      subtitle: "Internship · Hybrid",
      period: "October 2024 - Present",
      location: "Catania, Sicily, Italy",
      icon: Briefcase,
      color: "from-violet-500 to-fuchsia-500"
    },
    {
      type: "education",
      title: "Bachelor's Degree in Computer Science",
      organization: "OPIT - Open Institute of Technology",
      period: "September 2024 - September 2027",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500"
    },
    {
      type: "education",
      title: "Full Stack Development",
      organization: "START2IMPACT",
      period: "September 2023 - April 2024",
      description: "Score: 1500/1500",
      link: "#",
      icon: Award,
      color: "from-emerald-500 to-teal-500"
    },
    {
      type: "certification",
      title: "CS50x",
      organization: "Harvard Online",
      period: "May 2024",
      description: "Algorithms, Data Structures, C, Python, SQL",
      link: "#",
      icon: Award,
      color: "from-rose-500 to-orange-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % timelineData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-black/10 to-black/5 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
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
                    <Card className="group backdrop-blur-xl bg-black/10 border border-white/20 hover:border-primary/40 transition-all duration-500 overflow-hidden h-80">
                      <div className={`
                        absolute inset-0 opacity-0 group-hover:opacity-10
                        bg-gradient-to-br ${item.color}
                        blur-xl transition-all duration-700
                        -z-10
                      `} />

                      <div className="p-8 relative h-full flex flex-col">
                        <div className="flex items-center gap-4 mb-4">
                          <motion.div 
                            className={`
                              p-3 rounded-2xl
                              bg-gradient-to-br ${item.color}
                              shadow-lg
                            `}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </motion.div>
                          <time className="text-base font-medium opacity-70">
                            {item.period}
                          </time>
                        </div>

                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/90">
                            {item.title}
                          </h3>

                          <p className="text-lg font-medium mb-2 opacity-90">
                            {item.organization}
                          </p>

                          {item.subtitle && (
                            <p className="text-base opacity-70 mb-2">
                              {item.subtitle}
                            </p>
                          )}

                          {item.description && (
                            <p className="text-base opacity-70">
                              {item.description}
                            </p>
                          )}
                        </div>

                        {item.link && (
                          <div className="mt-4">
                            <Button
                              variant="outline"
                              size="lg"
                              className="group/btn hover:bg-white/10 border-white/20"
                            >
                              <span className="mr-2 group-hover/btn:text-primary transition-colors">
                                View Certificate
                              </span>
                              <ExternalLink className="w-4 h-4 group-hover/btn:text-primary transition-colors" />
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
                  ${activeIndex === index ? 'w-12 bg-gradient-to-r from-primary to-secondary' : 'w-3 bg-white/20'}
                  hover:bg-white/40
                `}>
                  <div className={`
                    absolute inset-0 blur-sm opacity-50
                    ${activeIndex === index ? 'bg-gradient-to-r from-primary to-secondary' : ''}
                  `} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoolTimeline;