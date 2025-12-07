import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView, useIsMobile } from '../../hooks';
import { fadeUpVariants } from '../../utils/animations';

const VIDEO_URLS = {
  mobile: 'https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/Arvion/sketch-video.mp4',
  desktop: 'https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/auriqua/Arvion+H+compressed.mp4',
};

export default function SketchVideo() {
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useIsMobile();

  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    const video = isMobile ? mobileVideoRef.current : desktopVideoRef.current;
    if (video && inView) {
      video.play().catch(() => {});
    } else if (video) {
      video.pause();
    }
  }, [inView, isMobile]);

  return (
    <section className="w-full bg-black md:pt-10">
      <div className="w-full py-12 md:py-16 px-4 md:px-8 bg-black">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.p
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-white px-2 max-w-[546px] font-normal text-lg md:text-2xl text-center"
          >
            Shaped one clean stroke at a time, Arvion grew from automotive design principles into a watch made
            for speed and forward momentum.
          </motion.p>
        </div>
      </div>

      <div ref={ref} className="w-full md:h-screen bg-black">
        <video
          ref={mobileVideoRef}
          src={VIDEO_URLS.mobile}
          playsInline
          muted
          loop
          preload="metadata"
          className="w-full h-full object-contain md:hidden"
        />

        <video
          ref={desktopVideoRef}
          src={VIDEO_URLS.desktop}
          playsInline
          muted
          loop
          preload="metadata"
          className="hidden md:block w-full h-full object-contain"
        />
      </div>
    </section>
  );
}
