import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks';
import { fadeUpVariants, staggerContainerVariants } from '../../utils/animations';
import { useWindowWidth } from '../../utils/width';

export default function Engineering() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const width=useWindowWidth()

  const { ref: inViewRef, inView } = useInView<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={sectionRef} className="relative overflow-hidden">
      <motion.div
        className={`text-center md:hidden relative z-[2]  ${width<=768?"mt-[60px]":""} `}
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

        <div className="relative w-full md:w-[40%] max-w-5xl md:max-w-none mx-auto h-[560px] 
          md:h-[580px] lg:h-[610px] z-[1] pointer-events-none overflow-visible md:overflow-visible"
          aria-hidden="true">
          <img alt="Image 1" loading="lazy" width="186" height="244" decoding="async"
            data-nimg="1" className="z-20 absolute left-[40%] -translate-x-[40%] top-0 w-[286px] md:w-[386px] h-auto opacity-80"
            src="https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/Arvion/ARV_sketch_03.webp"
            style={{
              color: "transparent",
              transform: "translate3d(-50%,  16.2197px, 0px)"
            }}
          />

          <img alt="Image 2" loading="lazy" width="186" height="250" decoding="async" data-nimg="1"
            className="absolute z-10 left-[65%] -translate-x-[65%] rounded-[8px] top-0 w-[186px] md:w-[246px] h-auto drop-shadow-xl"
            src="https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/Arvion/ARV4.webp"
            style={{
              color: "transparent",
              transform: "translate3d(-50%, 144.238px, 0px)"
            }}
          />

          <img alt="Image 3" loading="lazy" width="260" height="320" decoding="async" data-nimg="1"
            className="absolute z-0 left-1/2 -translate-x-1/2 -top-10 w-[300px] md:w-[500px] h-auto opacity-70"
            src="https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/Arvion/ARV_sketch_04.webp"
            style={{
              color: "transparent",
              transform: "translate3d(-50%, 370.275px, 0px)"
            }} />

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
