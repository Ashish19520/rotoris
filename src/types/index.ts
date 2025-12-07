export interface WatchProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  heroVideo?: string;
  galleryImages: GalleryImage[];
  specs: SpecCategory[];
  materials: Material[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface SpecCategory {
  title: string;
  items: SpecItem[];
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface Material {
  id: string;
  name: string;
  image: string;
  description?: string;
}

export interface NavItem {
  name: string;
  href: string;
  image?: string;
}

export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  instagram?: string;
  productName: string;
  termsAccepted: boolean;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export interface AnimationVariants {
  hidden: object;
  visible: object;
}

