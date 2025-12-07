import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useFocusTrap } from '../../hooks';
import { CloseIcon } from '../ui';
import type { ModalProps } from '../../types';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } },
};

interface ExtendedModalProps extends ModalProps {
  image?: string;
  imageAlt?: string;
}

export function Modal({ isOpen, onClose, children, title, image, imageAlt }: ExtendedModalProps) {
  const containerRef = useFocusTrap<HTMLDivElement>(isOpen);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
        aria-hidden="true"
      />

      <motion.div
        ref={containerRef}
        className="relative bg-white rounded-2xl max-w-[480px] w-full max-h-[90vh] overflow-hidden z-10 shadow-2xl"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 pt-4 pb-3">
          <h2 className="text-gray-900 text-lg font-semibold">{title}</h2>

          <button
            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors rounded-full bg-gray-100 hover:bg-gray-200"
            onClick={onClose}
            aria-label="Close modal"
          >
            <CloseIcon size={16} />
          </button>
        </div>

        {image && (
          <div className="w-full">
            <img
              src={image}
              alt={imageAlt || title || 'Modal image'}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <div className="px-5 py-4 overflow-y-auto max-h-[300px]">{children}</div>
      </motion.div>
    </div>
  );
}
