import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from '../../hooks';
import { fadeUpVariants, staggerContainerVariants } from '../../utils/animations';

export default function Ideation() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { ref: inViewRef, inView } = useInView<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 250]);

  return (
    <div id="ideation-section" ref={sectionRef} className="relative overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-1/2 pointer-events-none z-[1]"
        style={{
          background: 'linear-gradient(rgb(74, 54, 33) 9.11%, rgba(74, 54, 33, 0) 53.79%)',
        }}
      />

      <div
        ref={inViewRef}
        className="relative z-[2] flex flex-col md:flex-row items-center md:items-start justify-start px-0 pt-12 md:pt-40 md:px-8 gap-8 md:w-4/5 mx-auto"
      >
        <motion.div
          className="text-center mb-8 md:hidden"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.p
            variants={fadeUpVariants}
            className="text-white/40 text-sm font-medium leading-[135%] uppercase mb-2 tracking-wider"
          >
            IDEATION
          </motion.p>
          <motion.h2
            variants={fadeUpVariants}
            className="text-white text-[32px] font-semibold leading-[120%] tracking-[-1.44px] px-4"
          >
            Where speed meets <br />
            simplicity and design <br />
            meets instinct.
          </motion.h2>
        </motion.div>

        <motion.div
          className="hidden md:flex flex-col md:w-1/2 w-full z-[2] text-left pl-8 md:pt-10"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.p
            variants={fadeUpVariants}
            className="text-white/40 text-sm font-medium leading-[135%] uppercase tracking-wider"
          >
            IDEATION
          </motion.p>
          <motion.h2
            variants={fadeUpVariants}
            className="text-white md:mt-3 text-[40px] font-semibold leading-[120%] tracking-[-1.44px]"
          >
            Where speed meets <br />
            simplicity and <br />
            design meets instinct.
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-white/70 mt-10 text-lg md:text-[22px] leading-[150%] font-normal"
          >
            Inspired by classic performance dashboards built around one hand,{' '}
            <span className="text-white font-semibold">
              Arvion features a single hand that reads time as instinctively as velocity.
            </span>{' '}
            Timeless, focused design.
          </motion.p>
        </motion.div>

        <div className="flex flex-col md:w-1/2 w-full z-[2] items-start overflow-hidden">
          <div
            className="relative w-full h-[500px] lg:h-[440px] z-[1] pointer-events-none overflow-visible flex flex-col items-center"
            aria-hidden="true"
          >
            <motion.img
              alt="Speedometer"
              loading="lazy"
              width="260"
              height="320"
              className="rounded-lg w-[222px] md:w-[215px] lg:w-[265px] h-auto opacity-80"
              src="/assets/arvion/Astonia-speedometer.webp"
              style={{ y: y1 }}
            />
            <motion.img
              alt="Watch sketch"
              loading="lazy"
              width="196"
              height="250"
              className="z-20 -mt-[200px] w-[333px] h-auto drop-shadow-xl"
              src="/assets/arvion/ARV_sketch_01.webp"
              style={{ y: y2 }}
            />
          </div>
        </div>
      </div>

      <motion.p
        className="text-white/70 text-center mt-4 text-lg md:text-[22px] w-4/5 mx-auto leading-[150%] pb-5 md:hidden block relative z-[2]"
        variants={fadeUpVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        Inspired by classic performance dashboards built around one hand, Arvion features{' '}
        <span className="text-white font-semibold">
          a single hand that reads time as instinctively as velocity
        </span>
        . Timeless, focused design.
      </motion.p>

      <div
        className="relative md:hidden w-full h-[680px] z-[2] pointer-events-none overflow-visible"
        aria-hidden="true"
      >
        <motion.img
          alt="Watch detail"
          loading="lazy"
          width="260"
          height="320"
          className="z-10 absolute left-[20%] -translate-x-[40%] top-0 rounded-lg w-[222px] h-auto opacity-80"
          src="/assets/arvion/ARV2.webp"
          style={{ y: y1 }}
        />
        <motion.img
          alt="Watch side view"
          loading="lazy"
          width="196"
          height="250"
          className="absolute z-20 left-1/2 -translate-x-[65%] rounded-lg top-0 w-[222px] h-auto drop-shadow-xl"
          src="/assets/arvion/ARV3.webp"
          style={{ y: y2 }}
        />
        <motion.img
          alt="Design sketch"
          loading="lazy"
          width="260"
          height="320"
          className="absolute z-0 left-[20%] -translate-x-1/2 top-0 w-[400px] h-auto opacity-70"
          src="/assets/arvion/ARV_sketch_02.webp"
          style={{ y: y3 }}
        />
      </div>
    </div>
  );
}
