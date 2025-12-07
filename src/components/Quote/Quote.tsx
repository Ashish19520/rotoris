import { motion } from 'framer-motion';
import { fadeUpVariants } from '../../utils/animations';

function QuoteIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="34"
      viewBox="0 0 48 34"
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_quote)">
        <path
          d="M48 34H26.2753V20.8357C26.2753 20.8357 23.9622 2.42224 48 0V4.52299C48 4.52299 34.371 4.92762 33.6265 15.4258H48V34Z"
          fill="white"
        />
        <path
          d="M21.7852 34H0.0604343V20.8357C0.0604343 20.8357 -2.25264 2.42224 21.7852 0V4.52299C21.7852 4.52299 8.15618 4.92762 7.41161 15.4258H21.7852V34Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_quote">
          <rect width="48" height="34" fill="white" transform="matrix(-1 0 0 -1 48 34)" />
        </clipPath>
      </defs>
    </svg>
  );
}

const QUOTE_TEXT = 'What you wear on your wrist is your drive of the future.';

export function Quote() {
  return (
    <section className="w-full bg-black">
      <div className="block md:hidden">
        <div className="mx-auto">
          <motion.div
            className="text-center pt-8 mb-10"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">
              <QuoteIcon />
            </div>
            <h2 className="text-white text-2xl font-normal leading-[135%] max-w-xl mx-auto px-4">
              {QUOTE_TEXT}
            </h2>
          </motion.div>

          <div className="relative w-full max-w-4xl mx-auto">
            <img
              alt="Watch silhouette"
              loading="lazy"
              width="1000"
              height="1000"
              className="w-full h-auto object-contain"
              src="/assets/arvion/Arvion-watch-silhouette-mob.webp"
            />
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="mx-auto">
          <div className="relative w-full aspect-video overflow-hidden rounded-lg">
            <img
              alt="Watch silhouette"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              src="/assets/arvion/Arvion-watch-silhouette-desk.webp"
            />

            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center z-10"
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-6">
                <QuoteIcon className="w-16 h-[45px] drop-shadow-2xl" />
              </div>
              <h2 className="text-white text-center text-4xl font-semibold leading-[120%] tracking-[-1.08px] max-w-3xl mx-auto px-8 drop-shadow-2xl">
                {QUOTE_TEXT}
              </h2>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
