'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface ProjectSlide {
  title: string;
  description: string;
  visual?: string;
}

interface ProjectHScrollProps {
  title: string;
  subtitle: string;
  slides: ProjectSlide[];
  result: string;
  stack: string;
  githubUrl?: string;
}

export default function ProjectHScroll({
  title,
  subtitle,
  slides,
  result,
  stack,
  githubUrl
}: ProjectHScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const scrollToSlide = (index: number) => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.scrollWidth / slides.length;
      scrollRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
      setCurrentSlide(index);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.scrollWidth / slides.length;
      const currentPosition = scrollRef.current.scrollLeft;
      const newIndex = Math.round(currentPosition / slideWidth);
      setCurrentSlide(newIndex);
    }
  };

  return (
    <div 
      ref={containerRef} 
      className="py-24"
      style={{
        backgroundColor: '#FFFFFF',
        backgroundImage: `
          radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(250, 250, 250) 90%)
        `,
      }}
    >
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="heading-section text-gray-900 mb-4">{title}</h3>
          <p className="text-large text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="relative">
          {/* Desktop horizontal scroll */}
          <div className="hidden md:block">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-8 pb-4 scroll-smooth"
              style={{ scrollSnapType: 'x mandatory' }}
              onScroll={handleScroll}
            >
              {slides.map((slide, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-80"
                  style={{ scrollSnapAlign: 'start' }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-gray-50 rounded-2xl p-6 h-64 mb-6">
                    {slide.visual ? (
                      <Image
                        src={slide.visual}
                        alt={slide.title}
                        width={320}
                        height={200}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-accent-green rounded-xl mx-auto mb-4 flex items-center justify-center">
                            <span className="text-white text-xl font-bold">
                              {index + 1}
                            </span>
                          </div>
                          <p className="text-gray-500 text-sm">{slide.title}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {slide.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {slide.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-accent-green w-6'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Keyboard navigation buttons */}
            <div className="flex justify-center mt-4 space-x-4">
              <button
                onClick={() => scrollToSlide(Math.max(0, currentSlide - 1))}
                disabled={currentSlide === 0}
                className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous slide"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scrollToSlide(Math.min(slides.length - 1, currentSlide + 1))}
                disabled={currentSlide === slides.length - 1}
                className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Mobile vertical stack */}
          <div className="md:hidden space-y-8">
            {slides.map((slide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <div className="bg-gray-50 rounded-xl p-6 h-48 mb-4">
                  {slide.visual ? (
                    <Image
                      src={slide.visual}
                      alt={slide.title}
                      width={320}
                      height={200}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <div className="h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-accent-green rounded-lg mx-auto mb-3 flex items-center justify-center">
                          <span className="text-white font-bold">
                            {index + 1}
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm">{slide.title}</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {slide.title}
                </h4>
                <p className="text-gray-600">
                  {slide.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-accent-green/5 rounded-xl p-8 max-w-3xl mx-auto mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Result</h4>
            <p className="text-gray-700 mb-4">{result}</p>
            <p className="text-sm text-gray-500">
              <span className="font-medium">Stack:</span> {stack}
            </p>
          </div>

          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Github size={18} />
              GitHub
            </motion.a>
          )}
        </motion.div>
      </div>
    </div>
  );
}