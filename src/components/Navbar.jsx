import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, FolderKanban, User, Mail } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Function to determine which section is currently in view
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'contact'];
      
      // Get the current scroll position
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // Find which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          
          if (
            scrollPosition >= offsetTop && 
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Call once to set initial active section
    handleScroll();
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Link components with active state
  const NavLink = ({ href, icon: Icon, title, section }) => {
    const isActive = activeSection === section;
    
    return (
      <a 
        href={href} 
        className={`relative flex items-center justify-center transition-colors ${
          isActive 
            ? 'text-primary' 
            : 'text-muted-foreground hover:text-primary'
        }`} 
        title={title}
      >
        <span className="p-1.5 sm:p-2 rounded-full relative z-10">
          <Icon 
            size={18} 
            className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ease-out" 
          />
        </span>
        {isActive && (
          <motion.div
            layoutId="activeSection"
            className="absolute inset-0 bg-primary/15 rounded-full"
            initial={false}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </a>
    );
  };

  return (
    <div className="fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="px-3 py-1.5 sm:px-4 sm:py-2.5 bg-background/80 backdrop-blur-md border border-border/40 rounded-full shadow-md"
      >
        <div className="flex space-x-3 sm:space-x-6 items-center">
          <NavLink href="#home" icon={Home} title="Home" section="home" />
          <NavLink href="#projects" icon={FolderKanban} title="Projects" section="projects" />
          <NavLink href="#about" icon={User} title="About" section="about" />
          <NavLink href="#contact" icon={Mail} title="Contact" section="contact" />
        </div>
      </motion.nav>
    </div>
  );
}

export default Navbar;