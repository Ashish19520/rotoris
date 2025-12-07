import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../../hooks';
import { ARVION_PRODUCT } from '../../utils/constants';
import { fadeUpVariants, staggerContainerVariants } from '../../utils/animations';
import { Modal } from '../Modal';
import { PlusCircleIcon } from '../ui';
import type { Material } from '../../types';

export default function Materials() {
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);

  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <section className="w-full py-16 relative">
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%)',
          }}
        />
        <div ref={ref} className="max-w-6xl mx-auto px-[18px] md:px-0 relative z-[2]">
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.h2
              variants={fadeUpVariants}
              className="text-2xl md:text-4xl font-medium text-center text-white"
            >
              Key Materials
            </motion.h2>

            <div className="max-w-6xl flex flex-col items-center mx-auto">
              <motion.p
                variants={fadeUpVariants}
                className="text-center max-w-[450px] font-normal md:text-[22px] text-lg px-4 mt-3 text-white/70"
              >
                Built from elements that blend simplicity with strength
              </motion.p>
            </div>

            <motion.div
              variants={fadeUpVariants}
              className="grid grid-cols-3 gap-4 md:gap-6 mt-12 md:w-4/5 mx-auto"
            >
              {ARVION_PRODUCT.materials.map((material) => (
                <button
                  key={material.id}
                  className="flex flex-col items-center justify-between h-full cursor-pointer transition-transform hover:scale-105 active:scale-95 bg-transparent border-none"
                  onClick={() => setSelectedMaterial(material)}
                  aria-label={`Learn more about ${material.name}`}
                >
                  <img
                    alt={material.name}
                    loading="lazy"
                    width="140"
                    height="140"
                    className="w-full h-auto md:w-[140px]"
                    src={material.image}
                  />
                  <h3 className="w-full text-center font-normal leading-[150%] text-base text-white mt-3">
                    {material.name}
                  </h3>
                  <div className="mt-4 text-white">
                    <PlusCircleIcon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedMaterial && (
          <Modal
            isOpen={!!selectedMaterial}
            onClose={() => setSelectedMaterial(null)}
            title={selectedMaterial.name}
            image={selectedMaterial.image}
            imageAlt={selectedMaterial.name}
          >
            <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
              {selectedMaterial.description}
            </p>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
