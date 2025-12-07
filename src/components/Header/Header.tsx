import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useScrollPosition } from '../../hooks';
import { NAV_ITEMS } from '../../utils/constants';
import { navSlideVariants, backdropVariants } from '../../utils/animations';
import { MenuIcon, ChevronIcon } from '../ui';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { y } = useScrollPosition();
  const headerRef = useRef<HTMLElement>(null);

  const headerHeight = headerRef.current?.offsetHeight || 80;
  const scrollY = useMotionValue(0);
  const springConfig = { stiffness: 300, damping: 30, mass: 0.5 };

  const headerY = useSpring(
    useTransform(scrollY, [0, headerHeight], [0, -headerHeight]),
    springConfig
  );

  const headerOpacity = useTransform(scrollY, [0, headerHeight * 0.8], [1, 0]);

  useEffect(() => {
    scrollY.set(Math.min(y, headerHeight));
  }, [y, headerHeight, scrollY]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <motion.header
        ref={headerRef}
        style={{ y: headerY, opacity: headerOpacity }}
        className="fixed top-0 left-0 right-0 w-screen z-[1000] bg-transparent"
      >
        <nav className="w-full max-w-full md:pt-4 pt-3 pb-1 px-4 md:px-8">
          <div className="flex items-center relative justify-between">
            <button
              className="flex items-center justify-center w-10 h-10 hover:opacity-80 transition-opacity z-[10001] relative"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <MenuIcon isOpen={isMenuOpen} className="w-6 h-6" />
            </button>

            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-transparent z-[10001] py-5">
              <a href="/" aria-label="Rotoris Home">
                <img
                  alt="Rotoris Logo"
                  width="122"
                  height="18"
                  className="w-[122px] h-[18px] md:w-[166px] md:h-[24px] bg-transparent"
                  src="/assets/arvion/Rotoris_logo.svg"
                />
              </a>
            </div>

            <div className="w-10 h-10" aria-hidden="true" />
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/30 z-[9999] h-screen backdrop-blur-sm"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              className="fixed top-0 left-0 h-screen w-full md:w-[500px] max-w-[100vw] bg-rotoris-darker z-[10000] shadow-2xl overflow-y-auto scrollbar-none"
              variants={navSlideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="dialog"
              aria-label="Navigation menu"
            >
              <div className="flex flex-col h-screen p-4 md:p-8 pt-16 md:pt-20 bg-rotoris-darker overflow-y-auto scrollbar-none">
                <h2 className="text-white/70 text-sm md:text-lg font-semibold mb-4 md:mb-6 uppercase tracking-wider">
                  All timepieces
                </h2>

                <div className="flex flex-col gap-5 md:gap-4">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group relative overflow-hidden rounded-lg h-[100px] md:h-32 hover:scale-[1.02] transition-transform duration-200 bg-rotoris-darker"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.image && (
                        <img
                          alt={`${item.name} strip`}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover group-hover:opacity-70 transition-opacity"
                          src={item.image}
                        />
                      )}
                      <div className="relative h-full flex items-center justify-end px-6 z-10 gap-2">
                        <h3 className="text-white text-lg font-semibold group-hover:text-white/90 transition-colors uppercase">
                          {item.name}
                        </h3>
                        <ChevronIcon className="text-white group-hover:translate-x-1 transition-transform" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
