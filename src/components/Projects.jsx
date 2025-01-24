import { useRef, useEffect } from "react";
import Nana from "../assets/images/nana.webp";
import Unicash from "../assets/images/unicash.webp";
import Neverappedi from "../assets/images/neverappedi.png";
import { motion, useAnimation, useInView } from "framer-motion";
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
  },
  {
    title: "UniCash",
    description:
      "Manage your student finances effortlessly with UniCash, powered by React, Node.js, Tailwind CSS, and shadcn/ui components.",
    image: Unicash,
    githubLink: "https://github.com/francescovitale-dev/uni-cash",
    liveLink: "https://uni-cash.netlify.app",
  },
  {
    title: "Naná",
    description:
      "Savor authentic Italian cuisine at Naná, a React and Vanilla CSS creation embodying a true Italian restaurant experience in Frankfurt.",
    image: Nana,
    githubLink: "https://github.com/francescovitale-dev/nana",
    liveLink: "https://xn--nanconvivial-ebb.de/",
  },
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: index * 0.2 },
        },
      }}
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-66 md:h-96 object-cover rounded-md mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <CardDescription className="text-base">
            {project.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              {project.githubLink ? "GitHub" : "Private Repo"}
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section
      id="projects"
      className="py-16 md:py-28 bg-background bg-gradient-to-bl from-primary/5 to-secondary/10 backdrop-blur-sm"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            My Projects
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>

      <AnimatedLine />
    </section>
  );
};

export default Projects;
