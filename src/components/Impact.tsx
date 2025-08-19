'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

interface MetricProps {
  value: number;
  suffix: string;
  title: string;
  description: string;
  delay?: number;
}

function AnimatedCounter({ value, suffix, title, description, delay = 0 }: MetricProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, Math.round);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const controls = animate(motionValue, value, {
          duration: 1,
          ease: 'easeOut',
        });

        const unsubscribe = rounded.on('change', (latest) => {
          setDisplayValue(latest);
        });

        return () => {
          controls.stop();
          unsubscribe();
        };
      }, delay * 100);

      return () => clearTimeout(timer);
    }
  }, [isInView, motionValue, rounded, value, delay]);

  return (
    <motion.div
      ref={ref}
      className="text-center p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
    >
      <div className="text-metric text-accent-green mb-2">
        +{displayValue}{suffix}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

const metrics = [
  {
    value: 37,
    suffix: '%',
    title: 'Outreach Reply Rate',
    description: 'Improved response rates through strategic messaging and targeting'
  },
  {
    value: 22,
    suffix: '',
    title: 'Qualified Leads/Month',
    description: 'Generated consistent pipeline of qualified business opportunities'
  },
  {
    value: 48,
    suffix: '%',
    title: 'Time Saved',
    description: 'Reduced manual hours through process automation and optimization'
  }
];

export default function Impact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="work" ref={ref} className="py-24 bg-gray-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-section text-gray-900 mb-6">
            Business Impact
          </h2>
          <p className="text-large text-gray-600 max-w-2xl mx-auto">
            I build systems that move numbers. Here&apos;s what I&apos;ve achieved through strategic technology implementation.
          </p>
        </motion.div>

        <div className="grid-3-col max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <AnimatedCounter
              key={metric.title}
              value={metric.value}
              suffix={metric.suffix}
              title={metric.title}
              description={metric.description}
              delay={index}
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-500 text-sm">
            Results from recent business development and automation projects
          </p>
        </motion.div>
      </div>
    </section>
  );
}