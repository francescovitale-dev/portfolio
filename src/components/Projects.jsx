import { useState, useRef, useEffect } from "react";
import Neverappedi from "../assets/images/neverappedi.webp";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code, Users, Stethoscope, Brain, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SEO from "./SEO";
import { AmandoMedImage, SHBImage, AITrainerImage, NeverAppediImage } from "./ProjectImages";

const projectsData = [
  {
    title: "AmandoMed",
    description:
      "German modern medical appointment platform that simplifies healthcare access. Built with React and Node.js, featuring real-time booking, secure patient data management, and intuitive user experience for both patients and healthcare providers.",
    image: null, // Will use custom gradient
    liveLink: "#",
    tech: ["React", "Node.js", "Tailwind CSS", "Medical Platform"],
    status: "In Development",
    isInDevelopment: true,
    gradientFrom: "from-sky-500",
    gradientTo: "to-blue-600",
    projectType: "Freelance"
  },
  {
    title: "SHB",
    description:
      "Creative collaboration platform connecting builders, thinkers, and visionaries. Designed to foster meaningful work relationships and enable teams to create impactful projects together through modern web technologies.",
    image: null, // Will use custom gradient
    liveLink: "#",
    tech: ["React", "Node.js", "Tailwind CSS", "Framer Motion"],
    status: "In Development",
    isInDevelopment: true,
    gradientFrom: "from-indigo-500",
    gradientTo: "to-purple-600",
    projectType: "Freelance"
  },
  {
    title: "NeverAppedi",
    description:
      "Full-stack ride-sharing platform for Sicily featuring real-time matching, live chat, and community features. Built from the ground up with modern architecture and technologies.",
    image: null, // Will use custom component
    liveLink: "https://neverappedi.it",
    tech: ["React", "Node.js", "Tailwind CSS", "shadcn/ui", "Clerk Auth"],
    projectType: "Personal"
  },
  {
    title: "AI Trainer – Scale AI",
    description:
      "Collaborated on LLM training to generate and refine code (React, Python, JS). Specialized in prompt design and evaluation to create high-quality frontend components via AI, applying RLHF techniques to improve model performance and enhance AI-generated code quality",
    image: null, // Will use custom gradient
    liveLink: "https://www.ibm.com/think/topics/rlhf",
    tech: ["AI/ML", "React", "Python", "JavaScript", "RLHF"],
    status: "Completed",
    isInDevelopment: false,
    gradientFrom: "from-violet-500",
    gradientTo: "to-purple-600",
    projectType: "Freelance",
    isWorkExperience: true
  },
];

// Animation variants - Simplified and Smooth
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

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.1
    }
  }),
  hover: {
    y: -5,
    transition: {
      type: "tween",
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const BackgroundCircle = ({ size, color, x, y, delay }) => (
  <motion.div
    className="absolute rounded-full opacity-10 blur-3xl"
    style={{
      width: size,
      height: size,
      left: `${x}%`,
      top: `${y}%`,
      background: `var(--${color})`,
      transform: 'translate(-50%, -50%)'
    }}
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{
      scale: [0.9, 1.1, 0.9],
      opacity: [0.05, 0.15, 0.05]
    }}
    transition={{
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      delay: delay
    }}
  />
);

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      custom={index}
      variants={cardVariants}
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="w-full"
      initial="hidden"
      animate={isCardInView ? "visible" : "hidden"}
    >
      <Card className="overflow-hidden border border-border/50 bg-card/90 backdrop-blur-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-500 group">
        <div className="flex flex-col md:grid md:grid-cols-5 gap-0 md:h-80"> {/* Mobile: vertical, Desktop: horizontal */}
          {/* Image Section - Top on mobile, Left on desktop */}
          <CardContent className="md:col-span-2 p-0 relative overflow-hidden">
            <div className="relative overflow-hidden h-48 sm:h-56 md:h-80"> {/* Responsive heights */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent opacity-0 z-10 rounded-lg"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
{project.image ? (
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                initial={{ scale: 1.02 }}
                animate={{ scale: isCardInView ? 1 : 1.02 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            ) : (
              <motion.div
                className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                initial={{ scale: 1.02 }}
                animate={{ scale: isCardInView ? 1 : 1.02 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {project.title === "AmandoMed" ? (
                  <AmandoMedImage />
                ) : project.title === "SHB" ? (
                  <SHBImage />
                ) : project.title.includes("AI Trainer") ? (
                  <AITrainerImage />
                ) : project.title === "NeverAppedi" ? (
                  <NeverAppediImage />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center">
                    <Code size={48} className="text-white/90 drop-shadow-lg" />
                  </div>
                )}
              </motion.div>
            )}

            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center gap-4 z-20 bg-background/50 backdrop-blur-sm rounded-lg"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {project.isInDevelopment ? (
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full border-amber-300/50 bg-transparent text-amber-300 backdrop-blur-md cursor-not-allowed"
                      disabled
                    >
                      <span className="flex items-center gap-2">
                        <Wrench className="h-4 w-4" /> In Development
                      </span>
                    </Button>
                  ) : (
                    <>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="rounded-full border-primary/30 hover:bg-primary/20 text-primary backdrop-blur-md bg-background/30"
                      >
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" /> {project.isWorkExperience ? "Learn More" : "Live Demo"}
                        </a>
                      </Button>

                      {project.githubLink && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="rounded-full border-primary/30 hover:bg-primary/20 text-primary backdrop-blur-md bg-background/30"
                        >
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Github className="h-4 w-4" /> Code
                          </a>
                        </Button>
                      )}
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
            </div>
          </CardContent>

          {/* Content Section - Bottom on mobile, Right on desktop */}
          <div className="md:col-span-3 flex flex-col">
            <CardHeader className="p-4 sm:p-5 md:p-8 pb-3 md:pb-4">
              <div className="flex flex-row items-start justify-between gap-3 md:gap-4">
                <div className="flex-grow">
                  <CardTitle className="text-lg sm:text-xl md:text-xl font-medium text-muted-foreground mb-2 tracking-wide">
                    {project.title === "AmandoMed" ? "Healthcare Platform" : project.title === "SHB" ? "Freelance Platform" : project.title.includes("AI Trainer") ? "AI Training" : "Mobility Platform"}
                  </CardTitle>
                </div>
                
                {/* Action Button - Responsive positioning */}
                <div className="flex-shrink-0">
                  {project.isWorkExperience ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="hover:bg-primary/10 hover:text-primary transition-colors duration-300 text-xs sm:text-sm"
                    >
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 sm:gap-2"
                      >
                        <span className="hidden sm:inline">Learn More about RLHF</span>
                        <span className="sm:hidden">Learn More</span>
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                      </a>
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="hover:bg-primary/10 hover:text-primary transition-colors duration-300 text-xs sm:text-sm"
                    >
                      <a
                        href={project.isInDevelopment ? "#" : project.liveLink}
                        target={project.isInDevelopment ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                        className={project.isInDevelopment ? "cursor-not-allowed opacity-70" : ""}
                        onClick={e => project.isInDevelopment && e.preventDefault()}
                      >
                        <span>{project.isInDevelopment ? "In Development" : "Visit Site"}</span>
                        {project.isInDevelopment ? (
                          <Wrench className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                        ) : (
                          <ExternalLink className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                        )}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex-grow px-4 sm:px-5 md:px-8 py-0 pb-4 sm:pb-5 md:pb-6">
              <CardDescription className="text-sm sm:text-base text-muted-foreground/70 leading-relaxed mb-4 sm:mb-6 font-light">
                {project.description}
              </CardDescription>
              
              {/* Tech Stack - Hidden on mobile */}
              <div className="hidden sm:flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="bg-primary/5 text-primary border-primary/20 hover:bg-primary/10 text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>

          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-background relative overflow-hidden"
      ref={sectionRef}
    >
      <SEO
        title="My Work"
        description="Recent client work and professional experience in web development, AI training, and modern web technologies."
        url="https://www.vitalefrancesco.com/#projects"
      />

      {/* Background effects */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--primary)_0%,_transparent_70%)]" />

      <BackgroundCircle size="300px" color="primary" x={10} y={20} delay={0} />
      <BackgroundCircle size="400px" color="secondary" x={85} y={70} delay={2} />
      <BackgroundCircle size="250px" color="primary" x={50} y={90} delay={1} />

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2 }}
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "30px 30px"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 flex flex-col items-center"
        >
          <motion.div
            className="relative inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.span
              className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-md"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.h2
              className="relative text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground to-secondary py-1"
              initial={{ backgroundPosition: '0% 50%' }}
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 8, repeat: Infinity, repeatDelay: 5 }}
              style={{
                backgroundSize: '200% auto',
              }}
            >
              My Work
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-lg text-muted-foreground text-center mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Recent client work and professional experience in web development and AI.
          </motion.p>

          <motion.div
            className="flex justify-center mt-8 gap-3 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {["All", "Freelance", "Personal"].map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {filter}
              </Button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col gap-6 max-w-5xl mx-auto"
        >
          {projectsData
            .filter(project => {
              if (activeFilter === "All") return true;
              if (activeFilter === "Freelance") return project.projectType === "Freelance";
              if (activeFilter === "Personal") return project.projectType === "Personal";
              return false;
            })
            .map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
        </motion.div>

      </div>

      {/* Animate line at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: isInView ? 1 : 0, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </section>
  );
};

export default Projects;