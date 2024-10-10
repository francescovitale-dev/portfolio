import { motion } from "framer-motion";

const AnimatedLine = () => {
  return (
    <motion.div
      className="absolute bottom-0 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-primary to-secondary"
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ 
        once: false,  // Permette animazioni multiple
        amount: 0.1   // Trigger dell'animazione quando anche solo il 10% dell'elemento è visibile
      }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut" 
      }}
    />
  );
};

export default AnimatedLine;