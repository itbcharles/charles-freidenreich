'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

export default function AboutContact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    // Show success message (could implement toast here)
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="about" ref={ref} className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* About section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-section text-gray-900 mb-8">
              About
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                I&apos;m a business student who builds technology that solves real problems. 
                My background spans strategic research, system automation, and team leadership 
                through both business ventures and outdoor expeditions.
              </p>
              
              <p>
                What drives me is the intersection of business strategy and technical implementation. 
                I believe the most impactful solutions come from understanding both what needs to be built 
                and why it matters for the business.
              </p>
              
              <p>
                Currently exploring opportunities where I can apply this hybrid perspective 
                to help organizations build systems that scale and deliver measurable results.
              </p>
              
              <p>
                When not building systems or analyzing markets, you&apos;ll find me planning the next 
                outdoor expedition or working on Eagle Scout projects in the community.
              </p>
            </div>

            {/* Profile image placeholder */}
            <motion.div
              className="mt-8 w-48 h-48 bg-gradient-to-br from-accent-green/20 to-accent-green/5 rounded-2xl flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">CF</span>
                </div>
                <p className="text-gray-500 text-sm">Professional headshot</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="heading-section text-gray-900 mb-8" id="contact">
              Contact
            </h2>

            {/* Contact buttons */}
            <div className="space-y-4 mb-8">
              <motion.a
                href="mailto:charles@example.com"
                className="btn-primary w-full justify-center"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Mail size={18} />
                charles@example.com
              </motion.a>

              <div className="grid grid-cols-2 gap-4">
                <motion.a
                  href="https://linkedin.com/in/charlesfreidenreich"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary justify-center"
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
                  className="btn-secondary justify-center"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <Github size={18} />
                  GitHub
                </motion.a>
              </div>
            </div>

            {/* Contact form */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent transition-colors resize-vertical"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { y: -2 } : {}}
                  whileTap={!isSubmitting ? { y: 0 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="text-center mt-16 pt-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-accent-green font-medium">
            Open to tech + business internships
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} Charles Freidenreich. Built with Next.js and TypeScript.
          </p>
        </motion.div>
      </div>
    </section>
  );
}