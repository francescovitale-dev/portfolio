import React from 'react';
import { motion } from 'framer-motion';
import Layout from './layouts/Layout';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Home />
        <Projects />
        <About />
        <Contact />
        <Toaster position="bottom-right" />
      </motion.div>
    </Layout>
  );
}

export default App;