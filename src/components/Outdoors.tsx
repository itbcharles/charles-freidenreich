'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mountain, Compass, Users } from 'lucide-react';

const expeditions = [
  {
    location: 'Boundary Waters, Minnesota',
    lesson: 'Leading teams through uncertainty requires clear communication and adaptability.',
    icon: <Mountain size={24} />,
  },
  {
    location: 'Florida Keys',
    lesson: 'Resource management and planning are critical when stakes are high.',
    icon: <Compass size={24} />,
  },
  {
    location: 'Swedish Wilderness',
    lesson: 'International leadership requires cultural awareness and flexibility.',
    icon: <Users size={24} />,
  },
];

export default function Outdoors() {
  const ref = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="outdoors" ref={ref} className="relative overflow-hidden">
      {/* Hero section with parallax background */}
      <div 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center text-white"
      >
        {/* Background image with parallax effect */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y }}
          data-parallax
        >
          <div 
            className="w-full h-full bg-gradient-to-br from-green-800 to-green-900"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        {/* Content */}
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-section mb-6">
              Eagle Scout. Expeditions in Minnesota, Florida Keys, Sweden.
            </h2>
            <p className="text-large opacity-90 max-w-2xl mx-auto">
              Leadership in remote environments.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Expeditions section */}
      <div className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="heading-section text-gray-900 mb-6">
              What It Taught Me
            </h3>
            <p className="text-large text-gray-600 max-w-2xl mx-auto">
              Leadership lessons learned in challenging environments transfer directly to business contexts.
            </p>
          </motion.div>

          <div className="grid-3-col max-w-5xl mx-auto">
            {expeditions.map((expedition, index) => (
              <motion.div
                key={expedition.location}
                className="card text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-accent-green">
                    {expedition.icon}
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  {expedition.location}
                </h4>
                
                <p className="text-gray-600 leading-relaxed">
                  {expedition.lesson}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Eagle Scout badge section */}
          <motion.div
            className="text-center mt-16 p-8 bg-gradient-to-r from-accent-green/5 to-transparent rounded-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="w-20 h-20 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">ES</span>
            </div>
            
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              Eagle Scout
            </h4>
            
            <p className="text-gray-600 max-w-md mx-auto">
              Earned through leadership of community service projects and mastery of outdoor skills. 
              Only 4% of Scouts achieve this rank.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}