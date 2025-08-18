'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface ProjectStep {
  title: string;
  description: string;
}

interface ProjectStickyProps {
  title: string;
  subtitle: string;
  steps: ProjectStep[];
  result: string;
  stack: string;
  githubUrl?: string;
  demoUrl?: string;
  imageSrc?: string;
}

export default function ProjectSticky({
  title,
  subtitle,
  steps,
  result,
  stack,
  githubUrl,
  demoUrl,
  imageSrc
}: ProjectStickyProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.02, 1]);

  return (
    <div ref={containerRef} className="relative">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          className="sticky top-32 bg-gray-100 rounded-2xl p-8 aspect-[4/3] flex items-center justify-center"
          style={{ y: imageY, scale: imageScale }}
          data-parallax
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={`${title} interface`}
              width={400}
              height={300}
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--accent-green)] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  {title.charAt(0)}
                </span>
              </div>
              <p className="text-gray-600 font-medium">{title} Interface</p>
            </div>
          )}
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className="heading-section text-gray-900 mb-4">{title}</h3>
            <p className="text-large text-gray-600 mb-6">{subtitle}</p>
          </motion.div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-50px' }}
                className="border-l-2 border-[var(--accent-green)] pl-6"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="bg-[var(--accent-green)]/5 rounded-xl p-6"
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Result</h4>
            <p className="text-gray-700 mb-4">{result}</p>
            <p className="text-sm text-gray-500">
              <span className="font-medium">Stack:</span> {stack}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-wrap gap-4"
          >
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
            {demoUrl && (
              <motion.a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <ExternalLink size={18} />
                Demo
              </motion.a>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}