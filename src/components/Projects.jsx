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
import { Github, ExternalLink, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SEO from "./SEO";

const projectsData = [
  {
    title: "NeverAppedi",
    description:
      "Streamline your travel in Sicily with NeverAppedi, featuring real-time ride-sharing, live chat, and a collaborative community, built with React, Node.js, Tailwind CSS, and Clerk authentication.",
    image: Neverappedi,
    liveLink: "https://neverappedi.it",
    tech: ["React", "Node.js", "Tailwind CSS", "shadcn/ui", "Clerk Auth"]
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

const BackgroundCircle = ({ size, color, x, y, delay }) => (
  <motion.div
    className="absolute rounded-full opacity-20 blur-3xl"
    style={{
      width: size,
      height: size,
      left: `${x}%`,
      top: `${y}%`,
      background: `var(--${color})`,
      transform: 'translate(-50%, -50%)'
    }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      scale: [0.8, 1.2, 0.9, 1],
      opacity: [0.1, 0.3, 0.2, 0.25]
    }}
    transition={{
      duration: 8,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
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
      className="h-full" // Ensures card takes full height of grid cell
      initial="hidden"
      animate={isCardInView ? "visible" : "hidden"}
    >
      <Card className="h-full flex flex-col overflow-hidden border border-border/50 bg-card/90 backdrop-blur-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300">
        <CardHeader className="p-5 md:p-6">
          <div className="flex flex-col items-center mb-2">
            <CardTitle className="text-2xl font-medium text-foreground text-center mb-2">{project.title}</CardTitle>
          </div>

          {/* MODIFICATION HERE: Added min-h-[56px] (or h-14) and items-center */}
          <div className="flex flex-wrap gap-2 mt-2 justify-center min-h-[56px] items-center">
            {project.tech.map((tech, i) => (
              <Badge
                key={i}
                variant="outline"
                className="bg-primary/5 text-primary border-primary/20 hover:bg-primary/10"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardHeader>

        <CardContent className="flex-grow p-0 relative overflow-hidden">
          <div className="relative overflow-hidden group h-60 rounded-lg"> {/* Fixed height for image container */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 z-10 rounded-lg"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-lg"
              initial={{ scale: 1.1 }}
              animate={{ scale: isCardInView ? 1 : 1.1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            />

            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center gap-4 z-20 bg-background/60 backdrop-blur-sm rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
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
                      <ExternalLink className="h-4 w-4" /> Live Demo
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="p-5 md:p-6">
            <CardDescription className="text-base text-muted-foreground text-center">
              {project.description}
            </CardDescription>
          </div>
        </CardContent>

        <CardFooter className="flex justify-center p-5 md:p-6 pt-2 mt-auto gap-4">
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
              <Code className="mr-2 h-4 w-4" />
              {project.githubLink ? "View Source" : "Private Repository"}
            </a>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            asChild
            className="hover:bg-primary/10 hover:text-primary transition-colors duration-300"
          >
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Visit Site</span>
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
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
      <SEO
        title="My Projects"
        description="Explore a collection of my web development projects showcasing expertise in React, Node.js, and modern web technologies."
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
              My Projects
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-lg text-muted-foreground text-center mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Explore a selection of my recent work showcasing my skills in web development.
          </motion.p>

          <motion.div
            className="flex justify-center mt-8 gap-3 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {["All", "React", "Node.js", "Tailwind CSS"].map((filter) => (
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto"
        >
          {projectsData
            .filter(project =>
              activeFilter === "All" ||
              project.tech.includes(activeFilter)
            )
            .map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="relative rounded-full overflow-hidden group px-6 py-6 bg-background/30 backdrop-blur-sm border-primary/20 hover:border-primary/40"
          >
            <a
              href="https://github.com/francescovitale-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-base"
            >
              <Github size={18} className="text-foreground group-hover:text-primary transition-colors duration-300" />
              <span className="group-hover:text-primary transition-colors duration-300">More on GitHub</span>
              <motion.div
                className="absolute inset-0 bg-primary/5"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </a>
          </Button>
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