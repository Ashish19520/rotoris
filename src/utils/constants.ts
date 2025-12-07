import type { WatchProduct, NavItem } from '../types';

export const ARVION_PRODUCT: WatchProduct = {
  id: 'arvion',
  name: 'Arvion',
  tagline: 'For those who value clarity over complexity',
  description: 'Inspired by classic performance dashboards built around one hand, Arvion features a single hand that reads time as instinctively as velocity. Timeless, focused design.',
  heroImage: '/assets/arvion/hero-poster.webp',
  heroVideo: '/assets/arvion/hero-video.mp4',
  galleryImages: [
    { id: '1', src: '/assets/arvion/ARV2.webp', alt: 'Arvion watch detail', width: 222, height: 320 },
    { id: '2', src: '/assets/arvion/ARV3.webp', alt: 'Arvion watch side view', width: 222, height: 320 },
    { id: '3', src: '/assets/arvion/ARV4.webp', alt: 'Arvion watch components', width: 186, height: 250 },
    { id: '4', src: '/assets/arvion/ARV_sketch_01.webp', alt: 'Arvion design sketch 1', width: 196, height: 250 },
    { id: '5', src: '/assets/arvion/ARV_sketch_02.webp', alt: 'Arvion design sketch 2', width: 260, height: 320 },
    { id: '6', src: '/assets/arvion/ARV_sketch_03.webp', alt: 'Arvion design sketch 3', width: 186, height: 244 },
    { id: '7', src: '/assets/arvion/ARV_sketch_04.webp', alt: 'Arvion design sketch 4', width: 260, height: 320 },
  ],
  specs: [
    {
      title: 'Movement',
      items: [
        { label: 'Calibre', value: 'RSE20 Q-matic™ hybrid' },
        { label: 'Type', value: 'Quartz hybrid' },
        { label: 'Functions', value: 'Hour hand, minute markers, date' },
      ],
    },
    {
      title: 'Case',
      items: [
        { label: 'Material', value: '316L Stainless Steel' },
        { label: 'Diameter', value: '40mm' },
        { label: 'Water Resistance', value: '50m / 5ATM' },
      ],
    },
    {
      title: 'Crystal',
      items: [
        { label: 'Type', value: 'Sapphire Crystal' },
        { label: 'Treatment', value: 'Anti-reflective coating' },
      ],
    },
    {
      title: 'Strap',
      items: [
        { label: 'Material', value: 'Suede Leather' },
        { label: 'Width', value: '20mm' },
        { label: 'Clasp', value: 'Pin buckle' },
      ],
    },
  ],
  materials: [
    {
      id: 'steel',
      name: 'Stainless Steel 316L',
      image: '/assets/arvion/stainless-steel.webp',
      description: 'Marine-grade 316L surgical steel offers exceptional corrosion resistance and hypoallergenic properties. Its high chromium and nickel content provides superior durability while maintaining a luxurious finish.',
    },
    {
      id: 'sapphire',
      name: 'Sapphire Crystal',
      image: '/assets/arvion/Sapphirecrystal.webp',
      description: 'With a hardness rating of 9 on the Mohs scale (second only to diamond), sapphire crystal ensures your timepiece remains scratch-free. Anti-reflective coating on both sides provides crystal-clear visibility.',
    },
    {
      id: 'suede',
      name: 'Suede Leather',
      image: '/assets/arvion/Suede.png',
      description: 'Premium Italian suede leather combines softness with durability. Its breathable texture ensures comfort during extended wear while developing a unique patina over time.',
    },
  ],
};

export const NAV_ITEMS: NavItem[] = [
  { name: 'Arvion', href: '/products/arvion', image: '/assets/arvion/arvion_h.webp' },
  { name: 'Monarch', href: '/products/monarch', image: '/assets/arvion/monarch_h.webp' },
  { name: 'Auriqua', href: '/products/auriqua', image: '/assets/arvion/auriqua_h.webp' },
  { name: 'Astonia', href: '/products/astonia', image: '/assets/arvion/astonia_h.webp' },
  { name: 'Manifesta', href: '/products/manifesta', image: '/assets/arvion/manifesta_h.webp' },
];

export const SOCIAL_LINKS = {
  email: '#',
  instagram: 'https://www.instagram.com',
  linkedin: 'https://linkedin.com/',
};

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

