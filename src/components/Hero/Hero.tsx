import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { heroStaggerVariants, fadeUpVariants } from '../../utils/animations';
import { ARVION_PRODUCT } from '../../utils/constants';

const HERO_VIDEO_URL = 'https://vod.api.video/vod/vi43oLt7gV47CNleHg4eUxrA/mp4/source.mp4';
const HERO_POSTER = '/assets/arvion/hero-poster.webp';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={HERO_POSTER}
        onLoadedData={() => setIsVideoLoaded(true)}
      >
        <source src={HERO_VIDEO_URL} type="video/mp4" />
      </video>

      {!isVideoLoaded && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_POSTER})` }}
        />
      )}

      <div className="absolute inset-0 bg-black/30" />

      <div
        className="absolute md:hidden inset-x-0 bottom-0 h-1/2 pointer-events-none"
        style={{
          background: 'linear-gradient(rgba(74, 54, 33, 0) 60.9%, rgb(74, 54, 33) 100%)',
        }}
      />

      <div
        className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
        style={{
          background: 'linear-gradient(rgba(74, 54, 33, 0) 46.21%, rgb(74, 54, 33) 90.89%)',
        }}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center justify-between h-full py-6 md:py-8 px-6 pointer-events-none"
        variants={heroStaggerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex-1" />

        <div className="flex flex-col items-center text-center px-8 md:pb-10 pb-14">
          <motion.img
            variants={fadeUpVariants}
            alt="ARVION"
            className="w-76 md:w-64 lg:w-80 h-auto mb-4"
            src="/assets/arvion/Arvion-text.svg"
            fetchPriority="high"
          />

          <motion.p
            variants={fadeUpVariants}
            className="text-white text-xl leading-none tracking-[-0.6px] font-normal max-w-md md:mb-[54px] mb-[60px]"
          >
            {ARVION_PRODUCT.tagline}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
