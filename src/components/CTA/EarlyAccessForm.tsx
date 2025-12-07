import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks';
import { fadeUpVariants, staggerContainerVariants, buttonHoverVariants } from '../../utils/animations';
import { UserIcon, EmailInputIcon, PhoneIcon, InstagramInputIcon, CheckIcon, SpinnerIcon } from '../ui';

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  countryCode: string;
  instagram: string;
  termsAccepted: boolean;
}

const initialFormState: FormState = {
  fullName: '',
  email: '',
  phone: '',
  countryCode: '+91',
  instagram: '',
  termsAccepted: false,
};

const countryCodes = [
  { code: '+91', flag: '🇮🇳' },
  { code: '+1', flag: '🇺🇸' },
  { code: '+44', flag: '🇬🇧' },
  { code: '+971', flag: '🇦🇪' },
  { code: '+65', flag: '🇸🇬' },
  { code: '+61', flag: '🇦🇺' },
];

interface InputFieldProps {
  id: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  icon: React.ReactNode;
}

function InputField({ id, type, value, onChange, placeholder, required, disabled, icon }: InputFieldProps) {
  return (
    <div className="relative flex items-center">
      <span className="text-white absolute left-0">{icon}</span>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-field"
        disabled={disabled}
      />
    </div>
  );
}

export function EarlyAccessForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.termsAccepted) {
      alert('Please accept the terms and conditions');
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setForm(initialFormState);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange =
    (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
      setSubmitStatus('idle');
    };

  return (
    <section id="early-access" className="w-full px-4 md:px-8 bg-black py-16">
      <motion.div
        ref={ref}
        className="max-w-xl mx-auto text-center"
        variants={staggerContainerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2
          variants={fadeUpVariants}
          className="text-white text-[32px] md:text-[40px] font-bold leading-[120%] tracking-[-0.96px] mb-2"
        >
          <span className="md:hidden">
            Get early access
            <br /> to Arvion
          </span>
          <span className="hidden md:inline">Get early access to Arvion</span>
        </motion.h2>

        {submitStatus === 'success' ? (
          <motion.div variants={fadeUpVariants} className="py-12 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-rotoris-accent/20 flex items-center justify-center">
              <CheckIcon />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Thank you!</h3>
            <p className="text-white/70">We'll be in touch soon with early access details.</p>
          </motion.div>
        ) : (
          <motion.form variants={fadeUpVariants} className="space-y-6 mt-8" onSubmit={handleSubmit}>
            <input type="hidden" value="Arvion" name="productName" />

            <InputField
              id="fullName"
              type="text"
              required
              value={form.fullName}
              onChange={handleInputChange('fullName')}
              placeholder="Full name*"
              disabled={isSubmitting}
              icon={<UserIcon />}
            />

            <InputField
              id="email"
              type="email"
              required
              value={form.email}
              onChange={handleInputChange('email')}
              placeholder="Email id*"
              disabled={isSubmitting}
              icon={<EmailInputIcon />}
            />

            <div className="relative flex items-center">
              <span className="text-white absolute left-0">
                <PhoneIcon />
              </span>
              <div className="flex-1 flex items-center pl-10">
                <select
                  value={form.countryCode}
                  onChange={(e) => setForm((prev) => ({ ...prev, countryCode: e.target.value }))}
                  className="bg-transparent border-none text-white/70 text-sm appearance-none cursor-pointer focus:outline-none pr-2"
                  disabled={isSubmitting}
                >
                  {countryCodes.map(({ code, flag }) => (
                    <option key={code} value={code}>
                      {flag} {code}
                    </option>
                  ))}
                </select>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleInputChange('phone')}
                  placeholder="Phone*"
                  className="flex-1 bg-transparent border-b border-white/20 py-3 px-2 text-white placeholder:text-white/60 focus:outline-none focus:border-white/60 transition-colors"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <InputField
              id="instagram"
              type="text"
              value={form.instagram}
              onChange={handleInputChange('instagram')}
              placeholder="Instagram username (optional)"
              disabled={isSubmitting}
              icon={<InstagramInputIcon />}
            />

            <motion.button
              type="submit"
              className="btn-primary"
              variants={buttonHoverVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <SpinnerIcon />
                  Submitting...
                </span>
              ) : (
                'Submit'
              )}
            </motion.button>

            <div className="flex items-start gap-3 text-left">
              <input
                id="terms"
                type="checkbox"
                checked={form.termsAccepted}
                onChange={handleInputChange('termsAccepted')}
                className="mt-1 w-5 h-5 rounded border-2 border-white/40 bg-transparent checked:bg-rotoris-accent checked:border-rotoris-accent focus:outline-none focus:ring-2 focus:ring-rotoris-accent focus:ring-offset-2 focus:ring-offset-black cursor-pointer"
                disabled={isSubmitting}
              />
              <label htmlFor="terms" className="text-white/60 text-xs md:text-sm leading-relaxed cursor-pointer">
                By submitting, I agree to receive early-access updates from Rotoris and consent to the use of my
                data for this purpose. I've read and agree to the Terms & Conditions and Privacy Policy.
              </label>
            </div>
          </motion.form>
        )}
      </motion.div>
    </section>
  );
}
