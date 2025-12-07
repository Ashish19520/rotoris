interface IconProps {
  className?: string;
  size?: number;
}

export function ChevronIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 18L15 12L9 6" />
    </svg>
  );
}

export function ChevronUpIcon({ className = '', size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}

export function ChevronDownIcon({ className = '', size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function CloseIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function MenuIcon({ isOpen, className = '' }: { isOpen: boolean; className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d={isOpen ? 'M6 6L18 18M6 18L18 6' : 'M3 12H21M3 6H21M3 18H21'}
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlusCircleIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <line x1="12" y1="7" x2="12" y2="17" stroke="currentColor" strokeWidth="1.5" />
      <line x1="7" y1="12" x2="17" y2="12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function CheckIcon({ className = '', size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#007A61" strokeWidth="2">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function SpinnerIcon({ className = '' }: IconProps) {
  return (
    <svg className={`animate-spin w-5 h-5 ${className}`} viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}

export function UserIcon({ className = '' }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M4 20c0-4 3.5-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}

export function EmailInputIcon({ className = '' }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function PhoneIcon({ className = '' }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

export function InstagramInputIcon({ className = '' }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

