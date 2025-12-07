import { lazy, Suspense } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import LazySection from "./LazySection";
import { Header, Hero, FloatingCTA } from "./components";

const Ideation = lazy(() =>import("./components/Gallery/Ideation"));
const Engineering = lazy(() =>import("./components/Gallery/Engineering"));
const Materials = lazy(() =>import("./components/Specs/Materials"));
const SketchVideo = lazy(() => import("./components/Specs/SketchVideo"));
const Quote = lazy(() => import("./components/Quote/Quote"));
const EarlyAccessForm = lazy(() => import("./components/CTA/EarlyAccessForm"));
const Footer = lazy(() => import("./components/Footer/Footer"));


function App() {
  return (
    <LazyMotion features={domAnimation}>
      {/* Desktop BG */}
      <div
        className="hidden md:block fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "url(/assets/arvion/Arvion_desktop.webp)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Mobile BG */}
      <div
        className="block md:hidden fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "url(/assets/arvion/Arvion_mobile.webp)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Header />
      <main className="relative z-10">
        <Hero />
        {/* Lazy Loaded Sections — No JS until scroll */}
        <Suspense fallback={null}>
          <LazySection><Ideation /></LazySection>
          <LazySection><Engineering /></LazySection>
          <LazySection><Materials /></LazySection>
          <LazySection><SketchVideo /></LazySection>
          <LazySection><Quote /></LazySection>
          <LazySection><EarlyAccessForm /></LazySection>
          <LazySection><Footer /></LazySection>
        </Suspense>
      </main>

      <FloatingCTA />
    </LazyMotion>
  );
}

export default App;
