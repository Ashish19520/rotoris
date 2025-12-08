import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from '../../hooks';
import { fadeUpVariants, staggerContainerVariants } from '../../utils/animations';
import { useWindowWidth } from '../../utils/width';

export default function Ideation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const width = useWindowWidth();
  const isMobile = width <= 768;

  const { ref: inViewRef, inView } = useInView<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 250]);

  return (
    <div id="ideation-section" ref={sectionRef} className="relative overflow-hidden">
      {/* Top gradient overlay */}
      <div
        className="absolute inset-x-0 top-0 h-1/2 pointer-events-none z-[1]"
        style={{
          background: 'linear-gradient(rgb(74, 54, 33) 9.11%, rgba(74, 54, 33, 0) 53.79%)',
        }}
      />

      {/* MAIN CONTENT */}
      <div
        ref={inViewRef}
        className={`relative z-[2] flex  ${
          isMobile
            ? 'flex-col items-center px-0 pt-12 w-full'
            : 'flex-row items-center pt-40 px-8 w-4/5 mx-auto'
        } gap-8`}
      >
        {/* MOBILE HEADING */}
        {isMobile && (
          <motion.div
            className="text-center -mb-[20px]"
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
        )}

        {/* DESKTOP TEXT */}
        {!isMobile && (
          <motion.div
            className="flex flex-col w-1/2 text-left pl-8 pt-10"
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
              className="text-white mt-3 text-[40px] font-semibold leading-[120%] tracking-[-1.44px]"
            >
              Where speed meets <br />
              simplicity and <br />
              design meets instinct.
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              className="text-white/70 mt-10 text-[22px] leading-[150%] font-normal"
            >
              Inspired by classic performance dashboards built around one hand,{' '}
              <span className="text-white font-semibold">
                Arvion features a single hand that reads time as instinctively as velocity.
              </span>{' '}
              Timeless, focused design.
            </motion.p>
          </motion.div>
        )}

        {/* RIGHT IMAGES (Desktop + primary stack on mobile) */}
        <div
          className={`${isMobile ? 'w-full' : 'w-1/3'} flex justify-center z-[2]`}
        >
          <div
            className={`relative w-full max-w-[400px] ${
              isMobile ? 'h-[500px] right-[100px]'  : 'h-[600px]'
            } pointer-events-none overflow-visible mx-auto`}
            aria-hidden="true"
          >
            {/* BACK SPEEDOMETER */}
            <motion.img
              alt="Speedometer"
              loading="lazy"
              width="260"
              height="320"
              className={`absolute left-1/2 -translate-x-1/2 rounded-[8px] -ml-8 top-0 w-[265px] h-auto opacity-80`}
              src="https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/Arvion/Astonia-speedometer.webp"
              style={{ y: y1 }}
            />
          
            {/* WATCH SKETCH */}
            <motion.img
              alt="Watch detail"
              loading="lazy"
              width="196"
              height="250"
              className={`absolute z-20 ${
                isMobile ? 'top-[170px] ' : 'top-[150px]'
              } left-1/3 -translate-x-1/2 w-[333px] h-auto drop-shadow-xl`}
              src="https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/Arvion/ARV_sketch_01.webp"
              style={{ y: y3 }}
            />
          </div>
        </div>
      </div>

      {/* MOBILE BODY TEXT */}
      {isMobile && (
        <motion.p
          className="text-white/70 text-center mt-[40px] text-lg w-4/5 mx-auto leading-[150%] pb-5 block relative z-[2]"
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
      )}

     {/* MOBILE SECOND IMAGE CLUSTER */}
  <div className="relative md:hidden w-full h-[680px] md:h-[500px]  lg:h-[520px] z-[1] pointer-events-none overflow-visible"
         aria-hidden="true">

          <img alt="Image 1" loading="lazy" width="260" height="320" decoding="async" data-nimg="1" 
          className="z-10 absolute left-[35%] -translate-x-[40%] top-0 rounded-[8px] w-[222px] md:w-[215px] h-auto opacity-80"
           src="https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/Arvion/ARV2.webp" 
            style={{
                color: "transparent",
                transform: "translate3d(-50%, 39.783px, 0px)"
              }} 
           />

            <img alt="Image 2" loading="lazy" width="196" height="250" decoding="async" data-nimg="1" 
            className="absolute z-20 left-[65%] -translate-x-[65%] rounded-[8px] top-0 w-[222px] md:w-[215px] h-auto drop-shadow-xl" 
            src="https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/Arvion/ARV3.webp" 
             style={{
                color: "transparent",
                transform: "translate3d(-50%, 169.765px, 0px)"
              }} 
            />
            
            <img alt="Image 3" loading="lazy" width="260" height="320" decoding="async" 
            data-nimg="1" className="absolute z-0 left-1/2 -translate-x-1/2 top-0 w-[400px] md:w-[300px] h-auto opacity-70" 
            src="https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/Arvion/ARV_sketch_02.webp" 
            style={{
                color: "transparent",
                transform: "translate3d(-50%, 289.837px, 0px)"
              }} 
            />
          </div>

    </div>
  );
}
