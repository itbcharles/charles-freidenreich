'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

interface WritingPost {
  slug: string;
  title: string;
  tldr: string;
  date: string;
  tags: string[];
}

interface WritingGridProps {
  posts: WritingPost[];
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default function WritingGrid({ posts }: WritingGridProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="writing" ref={ref} className="py-24 bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-section text-gray-900 mb-6">
            Writing
          </h2>
          <p className="text-large text-gray-600 max-w-2xl mx-auto">
            Thoughts on business, technology, and building systems that scale.
          </p>
        </motion.div>

        {posts.length > 0 ? (
          <div className="grid-3-col max-w-6xl mx-auto">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                className="card group cursor-pointer h-full flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => {
                  // For now, just scroll to top. Later can implement routing to full posts
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div className="flex-1">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar size={14} className="mr-2" />
                    {formatDate(post.date)}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-accent-green transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4 flex-1">
                    {post.tldr}
                  </p>

                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center text-accent-green text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Read more
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-500">
              Writing samples coming soon.
            </p>
          </motion.div>
        )}

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-500 text-sm">
            More writing available on request
          </p>
        </motion.div>
      </div>
    </section>
  );
}