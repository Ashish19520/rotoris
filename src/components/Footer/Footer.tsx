import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../../utils/constants';
import { fadeUpVariants } from '../../utils/animations';
import { ChevronUpIcon } from '../ui';
import { EmailSocialIcon, InstagramSocialIcon, LinkedInSocialIcon } from '../ui';

const socialLinks = [
  { href: SOCIAL_LINKS.email, label: 'Email', Icon: EmailSocialIcon },
  { href: SOCIAL_LINKS.instagram, label: 'Instagram', Icon: InstagramSocialIcon },
  { href: SOCIAL_LINKS.linkedin, label: 'LinkedIn', Icon: LinkedInSocialIcon },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      className="w-full pt-10 pb-5 md:pt-16 px-4 md:px-8 bg-black"
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <button
          className="flex items-center justify-center gap-2 transition-all hover:opacity-80 mb-8 h-9 px-3 py-2 rounded-full border border-white/[0.17] bg-black/50 backdrop-blur-[4.25px] text-[#d9d9d9] text-sm font-bold"
          style={{
            boxShadow:
              'rgba(0, 0, 0, 0.29) 0px -1px 1px 0px inset, rgba(255, 255, 255, 0.08) 0px 2px 2px 0px inset',
          }}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ChevronUpIcon />
          <span>Back to Top</span>
        </button>

        <div className="flex items-center gap-0.5">
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:opacity-80 hover:scale-110"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>

        <div className="text-xs text-white/50 mt-4">© {new Date().getFullYear()} Rotoris</div>
      </div>
    </motion.footer>
  );
}
