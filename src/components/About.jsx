import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';

const About = () => {
  const education = [
    {
      title: "Full Stack Development Master Program",
      institution: "start2impact University",
      period: "2023 - 2024",
      description: "Comprehensive curriculum covering HTML, CSS, Git, JavaScript, React, Bootstrap, Node.js, Express.js and more.",
      link: "https://raw.githubusercontent.com/francescovitale-dev/portfolio-website/dev/src/assets/images/master-attestato.png"
    },
    {
      title: "CS50x",
      institution: "Harvard Online",
      period: "Issued May 2024",
      description: "Explored algorithms, data structures, and programming essentials. Developed familiarity with C, Python, and SQL.",
      link: "https://certificates.cs50.io/c52b5631-c7db-4e86-81d3-866b3cd17f83.png?size=letter"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-28 bg-background bg-gradient-to-bl from-primary/5 to-secondary/5 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
        About
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Who am I?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-lg">
                I'm a 21-year-old who enjoys coding and exploring the world, eager to discover new places and share authentic moments with people. Reading is another passion of mine, books are a constant source of inspiration and learning for me. Every day presents an opportunity to learn something new and approach the world with wide-open eyes.
                </p>
                <p className="mb-4 text-lg">
                If you share interests in technology, travel, reading, entrepreneurship or simply being curious, I'm open to new connections!
                </p>
                <p className="text-lg">
                Feel free to say hello and share your experiences!
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative border-l border-gray-200 dark:border-gray-700">
                  {education.map((item, index) => (
                    <div key={index} className="mb-10 ml-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.period}</time>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                      <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">{item.institution}</p>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">{item.description}</p>
                      <Button asChild variant="link" className="text-primary p-0 hover:underline mt-2">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          View Certification <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
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
};

export default About;