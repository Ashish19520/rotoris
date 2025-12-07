import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '../ui';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const ideationSection = document.getElementById('ideation-section');
      const ideationTop = ideationSection?.offsetTop || windowHeight;

      const earlyAccessSection = document.getElementById('early-access');
      const earlyAccessTop = earlyAccessSection?.offsetTop || Infinity;

      setIsVisible(
        scrollY > ideationTop - windowHeight + 200 && scrollY < earlyAccessTop - windowHeight + 200
      );
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-6 left-1/2 z-50 flex flex-row-reverse font-medium items-center gap-2 text-white px-5 py-3 text-sm rounded-full border border-white/20 bg-black/50 backdrop-blur-[4.25px]"
          style={{ transform: 'translateX(-50%)' }}
          initial={{ opacity: 0, y: 20, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 20, x: '-50%' }}
          transition={{ duration: 0.3 }}
          onClick={scrollToForm}
          aria-label="Get Early Access"
        >
          <ChevronDownIcon className="opacity-70" />
          Get Early Access
        </motion.button>
      )}
    </AnimatePresence>
  );
}
