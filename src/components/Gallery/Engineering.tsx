import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView, useIsMobile } from '../../hooks';
import { fadeUpVariants, staggerContainerVariants } from '../../utils/animations';

export default function Engineering() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const { ref: inViewRef, inView } = useInView<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const getParallaxStyle = (yValue: typeof y1) => (isMobile ? {} : { y: yValue });

  return (
    <div ref={sectionRef} className="relative overflow-hidden">
      <motion.div
        className="text-center md:hidden relative z-[2]"
        variants={staggerContainerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.p
          variants={fadeUpVariants}
          className="text-white/40 text-sm font-medium leading-[135%] uppercase mb-2 tracking-wider"
        >
          ENGINEERING
        </motion.p>
        <motion.h2
          variants={fadeUpVariants}
          className="text-white text-[32px] font-semibold leading-[120%] tracking-[-1.44px]"
        >
          Powered by <br />
          Q-matic™ technology
        </motion.h2>
      </motion.div>

      <div
        ref={inViewRef}
        className="relative z-[2] flex flex-col md:flex-row items-center justify-start px-0 py-4 md:px-8 gap-12 md:w-4/5 mx-auto"
      >
        <div
          className="relative w-full md:w-1/2 max-w-5xl md:max-w-none mx-auto h-[560px] md:h-[580px] lg:h-[610px] z-[1] pointer-events-none overflow-hidden flex flex-col items-center"
          aria-hidden="true"
        >
          <motion.img
            alt="Engineering sketch"
            loading="lazy"
            width="186"
            height="200"
            className="z-20 w-[230px] -mr-[-110px] h-auto opacity-80 md:absolute md:right-[100px]"
            src="/assets/arvion/ARV_sketch_03.webp"
            style={getParallaxStyle(y1)}
          />
          <motion.img
            alt="Watch component"
            loading="lazy"
            width="186"
            height="250"
            className="z-10 rounded-lg w-[246px] -mt-[150px] h-auto drop-shadow-xl"
            src="/assets/arvion/ARV4.webp"
            style={getParallaxStyle(y2)}
          />
          <motion.img
            alt="Technical drawing"
            loading="lazy"
            width="260"
            height="320"
            className="z-0 -mt-[180px] mr-[50px] w-[250px] h-auto opacity-70"
            src="/assets/arvion/ARV_sketch_04.webp"
            style={getParallaxStyle(y3)}
          />
        </div>

        <motion.div
          className="hidden md:flex flex-col justify-center w-1/2 max-w-lg space-y-6 z-[2] text-left"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.p
            variants={fadeUpVariants}
            className="text-white/40 text-sm font-medium leading-[135%] uppercase tracking-wider"
          >
            ENGINEERING
          </motion.p>
          <motion.h2
            variants={fadeUpVariants}
            className="text-white text-[40px] font-semibold leading-[120%] tracking-[-1.44px]"
          >
            Powered by <br />
            Q-matic™ technology
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-white/70 text-lg md:text-[22px] leading-[150%] font-normal"
          >
            Our <span className="text-white font-semibold">RSE20 Q-matic™ hybrid calibre</span> features a
            single hand reads hours like a speedometer.{' '}
            <span className="text-white font-semibold">Minute markers every 10 minutes.</span> Date at 3
            o'clock. 50m water-resistant. Less is more.
          </motion.p>
        </motion.div>
      </div>

      <motion.p
        className="text-white/70 text-center text-lg md:text-[22px] w-4/5 mx-auto leading-[150%] md:hidden block pb-4 relative z-[2]"
        variants={fadeUpVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        Our <span className="text-white font-semibold">RS E20 Q-matic™ hybrid calibre</span> features a single
        hand reads hours like a speedometer.{' '}
        <span className="text-white font-semibold">Minute markers every 10 minutes</span>. Date at 3 o'clock.
        50m water-resistant. Less is more.
      </motion.p>
    </div>
  );
}
