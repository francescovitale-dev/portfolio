import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, FolderKanban, User, Mail } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isNavigating) return; // Don't update during manual navigation
      
      const sections = ['home', 'projects', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isNavigating]);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId); // Set immediately
    setIsNavigating(true);
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Re-enable scroll detection after scroll completes
      setTimeout(() => {
        setIsNavigating(false);
      }, 1000);
    }
  };

  const NavLink = ({ section, icon: Icon, title }) => {
    const isActive = activeSection === section;
    
    return (
      <button
        onClick={() => handleNavClick(section)}
        className={`relative flex items-center justify-center p-2 rounded-full transition-all duration-200 ${
          isActive 
            ? 'text-primary bg-primary/10' 
            : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
        }`}
        title={title}
      >
        <Icon size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    );
  };

  return (
    <div className="fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="px-3 py-2 sm:px-4 sm:py-3 bg-background/80 backdrop-blur-md border border-border/40 rounded-full shadow-md"
      >
        <div className="flex space-x-2 sm:space-x-4 items-center">
          <NavLink section="home" icon={Home} title="Home" />
          <NavLink section="projects" icon={FolderKanban} title="Projects" />
          <NavLink section="about" icon={User} title="About" />
          <NavLink section="contact" icon={Mail} title="Contact" />
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;