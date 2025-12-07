import { LazyMotion, domAnimation } from 'framer-motion';
import {
  Header,
  Hero,
  Ideation,
  Engineering,
  Materials,
  SketchVideo,
  Quote,
  EarlyAccessForm,
  FloatingCTA,
  Footer,
} from './components';

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div
        className="hidden md:block fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'url(/assets/arvion/Arvion_desktop.webp)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div
        className="block md:hidden fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'url(/assets/arvion/Arvion_mobile.webp)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <Header />

      <main className="relative z-10">
        <Hero />

        <div className="relative">
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              backgroundImage: 'url(https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/Arvion/Arvion_desktop.webp)',
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <Ideation />
          <Engineering />
          <Materials />
        </div>

        <SketchVideo />
        <Quote />
        <EarlyAccessForm />
        <Footer />
      </main>

      <FloatingCTA />
    </LazyMotion>
  );
}

export default App;
