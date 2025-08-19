'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const keywords = ['Strategy', 'Systems', 'Research', 'Outdoors'];

export default function Hero() {
  const [currentKeyword, setCurrentKeyword] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentKeyword((prev) => (prev + 1) % keywords.length);
    }, 1600);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleSmoothScroll = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{ y }}
        data-parallax
      >
        <div className="w-full h-full bg-gradient-to-br from-accent-green to-transparent"></div>
      </motion.div>

      <div className="container-custom text-center relative z-10" id="main-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading-hero text-gray-900 mb-6">
            Charles Freidenreich
          </h1>
          
          <div className="mb-8">
            <p className="text-large text-gray-600 mb-4">
              Business + Technology
            </p>
            
            <div 
              className="h-8 flex items-center justify-center"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onFocus={() => setIsPaused(true)}
              onBlur={() => setIsPaused(false)}
              tabIndex={0}
            >
              <motion.span
                key={currentKeyword}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-accent-green font-medium text-lg"
              >
                {keywords[currentKeyword]}
              </motion.span>
            </div>
          </div>

          <motion.div 
            className="flex items-center justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.a
              href="mailto:charles@example.com"
              className="btn-primary"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Mail size={18} />
              Email
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/charlesfreidenreich"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Linkedin size={18} />
              LinkedIn
            </motion.a>
            
            <motion.a
              href="https://github.com/charlesfreidenreich"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Github size={18} />
              GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={handleSmoothScroll}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-accent-green transition-colors"
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        whileHover={{ scale: 1.1 }}
        aria-label="Scroll to content"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}