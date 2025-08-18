export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

export const slideInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4, ease: 'easeOut' }
};

export const countUp = (value: number, duration: number = 1) => ({
  initial: { value: 0 },
  animate: { value },
  transition: {
    duration,
    ease: 'easeOut',
    type: 'spring',
    stiffness: 50
  }
});

export const parallaxVariants = {
  initial: { y: 0 },
  animate: (offset: number) => ({
    y: offset,
    transition: { type: 'spring', stiffness: 300, damping: 30 }
  })
};