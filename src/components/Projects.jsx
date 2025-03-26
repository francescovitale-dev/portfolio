import { useState, useRef, useEffect } from "react";
import Nana from "../assets/images/nana.webp";
import Unicash from "../assets/images/unicash.webp";
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
import { Github, ExternalLink } from "lucide-react";
import AnimatedLine from "./AnimatedLine";

const projectsData = [
  {
    title: "NeverAppedi",
    description:
      "Streamline your travel in Sicily with NeverAppedi, featuring real-time ride-sharing, live chat, and a collaborative community, built with React, Node.js, Tailwind CSS, and Clerk authentication.",
    image: Neverappedi,
    liveLink: "https://neverappedi.it",
    tech: ["React", "Node.js", "Tailwind CSS", "Clerk Auth"]
  },
  {
    title: "UniCash",
    description:
      "Manage your student finances effortlessly with UniCash, powered by React, Node.js, Tailwind CSS, and shadcn/ui components.",
    image: Unicash,
    githubLink: "https://github.com/francescovitale-dev/uni-cash",
    liveLink: "https://uni-cash.netlify.app",
    tech: ["React", "Node.js", "Tailwind CSS", "shadcn/ui"]
  },
  {
    title: "Naná",
    description:
      "Savor authentic Italian cuisine at Naná, a React and Vanilla CSS creation embodying a true Italian restaurant experience in Frankfurt.",
    image: Nana,
    githubLink: "https://github.com/francescovitale-dev/nana",
    liveLink: "https://xn--nanconvivial-ebb.de/",
    tech: ["React", "Vanilla CSS"]
  },
];

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

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: (i) => ({ 
    y: 0, 
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 80,
      damping: 12,
      delay: i * 0.2
    }
  }),
  hover: { 
    y: -10,
    transition: { 
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  }
};

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="h-full flex flex-col overflow-hidden border border-border/50 bg-background/80 backdrop-blur-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300">
        <CardHeader className="p-5 md:p-6">
          <CardTitle className="text-2xl font-medium text-foreground text-center">{project.title}</CardTitle>
          
          <div className="flex flex-wrap gap-2 mt-2 justify-center">
            {project.tech.map((tech, i) => (
              <span key={i} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary/80">
                {tech}
              </span>
            ))}
          </div>
        </CardHeader>
        
        <CardContent className="flex-grow p-0 relative overflow-hidden">
          <motion.div
            className="relative overflow-hidden"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 z-10"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-700"
            />
            
            <AnimatePresence>
              {isHovered && (
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center z-20 bg-background/60 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button 
                    asChild
                    variant="outline" 
                    size="lg" 
                    className="rounded-full border-primary/30 hover:bg-primary/20 text-primary"
                  >
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" /> Visit Site
                    </a>
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          <div className="p-5 md:p-6">
            <CardDescription className="text-base text-muted-foreground">
              {project.description}
            </CardDescription>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-center p-5 md:p-6 pt-0 border-t border-border/20 mt-auto">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="hover:bg-primary/10 hover:text-primary transition-colors duration-300"
          >
            <a
              href={project.githubLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={!project.githubLink ? "cursor-not-allowed opacity-70" : ""}
              onClick={e => !project.githubLink && e.preventDefault()}
            >
              <Github className="mr-2 h-4 w-4" />
              {project.githubLink ? "Source Code" : "Private Repo"}
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
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
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)]" />
      
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
          backgroundImage: 'radial-gradient(circle at 30% 70%, var(--primary), transparent 800px)',
          backgroundSize: '100% 100%'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
            My Projects
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground text-center mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Explore some of my recent work. Each project represents a unique challenge and a chance to create something meaningful.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Button asChild variant="outline" size="lg" className="rounded-full overflow-hidden relative h-12 px-6">
            <a href="https://github.com/francescovitale-dev" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <Github size={18} className="mr-2" /> 
              <span className="text-base">More on GitHub</span>
              <motion.div
                className="absolute inset-0 bg-primary/10"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </a>
          </Button>
        </motion.div>
      </div>
      
    </section>
  );
};

export default Projects;