## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion

## Project Structure

```
src/
├── components/
│   ├── Header/       Navigation and mobile menu
│   ├── Hero/         Hero section with video
│   ├── Gallery/      Ideation & Engineering sections
│   ├── Specs/        Materials and sketch video
│   ├── Quote/        Quote section
│   ├── CTA/          Early access form and floating button
│   ├── Modal/        Material detail modal
│   ├── Footer/       Footer with social links
│   └── ui/           Reusable icons and components
├── hooks/            Custom React hooks
├── utils/            Animation variants and constants
├── types/            TypeScript definitions
└── styles/           Global CSS
```

## External Resources

Videos and images are loaded from:

- `https://vod.api.video/vod/vi43oLt7gV47CNleHg4eUxrA/mp4/source.mp4`
- `https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/Arvion/sketch-video.mp4`
- `https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/auriqua/Arvion+H+compressed.mp4`
- `https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/Arvion/Arvion_desktop.webp`

Local assets are in `public/assets/arvion/`.

