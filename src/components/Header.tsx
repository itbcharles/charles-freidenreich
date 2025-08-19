'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Work', href: '#work' },
  { name: 'Tech', href: '#tech' },
  { name: 'Writing', href: '#writing' },
  { name: 'Outdoors', href: '#outdoors' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 100) {
      setIsVisible(latest < lastScrollY || latest < 100);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(latest);
  });

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = targetId === 'home' ? document.body : document.getElementById(targetId);
    
    if (element) {
      const offsetTop = targetId === 'home' ? 0 : element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="container-custom py-4">
          <div className="flex items-center justify-between">
            <motion.a
              href="#home"
              className="text-xl font-semibold text-gray-900 hover:text-accent-green transition-colors"
              onClick={(e) => handleSmoothScroll(e, '#home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CF
            </motion.a>

            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-accent-green transition-colors"
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            <motion.button
              className="md:hidden p-2 text-gray-700 hover:text-accent-green"
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </nav>
      </motion.header>
    </>
  );
}