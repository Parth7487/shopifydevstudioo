import { useRef, useState, useEffect, lazy, Suspense } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
} from "framer-motion";
import { Button } from "@/components/ui/button";
const LazySplashCursor = lazy(() => import("../ui/splash-cursor").then((m) => ({ default: m.SplashCursor })));
import CalendlyModal from "./CalendlyModal";

const ElegantHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const isInView = useInView(containerRef, { once: true });
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (isMobile || prefersReduced || !hasFinePointer) return;

    let idleId: any;
    const enable = () => setShowCursor(true);
    if ((window as any).requestIdleCallback) {
      idleId = (window as any).requestIdleCallback(enable, { timeout: 1500 });
    } else {
      idleId = setTimeout(enable, 800);
    }
    return () => {
      if ((window as any).cancelIdleCallback && idleId && typeof idleId !== "number") {
        (window as any).cancelIdleCallback(idleId);
      } else if (typeof idleId === "number") {
        clearTimeout(idleId);
      }
    };
  }, []);

  // Smooth scroll-based transforms
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), {
    stiffness: 100,
    damping: 30,
  });
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.8], [1, 0]), {
    stiffness: 100,
    damping: 30,
  });
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.8], [1, 0.95]), {
    stiffness: 100,
    damping: 30,
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden gpu-accelerated motion-safe"
      style={{
        y,
        opacity,
        scale,
        willChange: "transform, opacity",
        transform: "translateZ(0)",
      }}
    >
      {/* Elegant background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-charcoal/40 to-black subtle-grain" />

      {/* Fluid cursor effect - lazy & desktop-only */}
      <div className="absolute inset-0 z-0 gpu-accelerated">
        {showCursor && (
          <Suspense fallback={null}>
            <LazySplashCursor
              DENSITY_DISSIPATION={3.0}
              VELOCITY_DISSIPATION={2.2}
              SPLAT_FORCE={3500}
              SPLAT_RADIUS={0.12}
              COLOR_UPDATE_SPEED={7}
            />
          </Suspense>
        )}
      </div>

      {/* Subtle ambient background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 4 }}
      >
        <div
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(230,177,126,0.1) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(209,169,122,0.08) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto mobile-safe-padding text-center">
        {/* Main headline with elegant reveal */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-light leading-[0.9] tracking-tight text-gray-100 mb-6 sm:mb-8">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              We Bring
            </motion.span>
            <motion.span
              className="block text-beige"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Shopify Dreams
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              to Life
            </motion.span>
          </h1>
        </motion.div>

        {/* Elegant subtitle */}
        <motion.p
          className="responsive-text-base text-gray-400 font-light leading-relaxed max-w-3xl mx-auto mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          Custom Shopify themes built for brands that demand excellence,
          performance, and timeless design.
        </motion.p>

        {/* Clean CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={() => {
              const url = (import.meta as any).env?.VITE_CALENDLY_URL as string | undefined;
              if (url) {
                setCalendlyOpen(true);
              } else {
                scrollToSection("contact");
              }
            }}
              className="elegant-button w-full sm:w-auto px-6 sm:px-8 py-3 responsive-text-xs font-medium tracking-wide rounded"
            >
              Schedule a Call
            </Button>
          </motion.div>

          <motion.button
            onClick={() => scrollToSection("work")}
            className="elegant-button-outline w-full sm:w-auto px-6 sm:px-8 py-3 responsive-text-xs font-medium tracking-wide rounded transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View Our Work
          </motion.button>
        </motion.div>

        {/* Subtle scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.div
            className="w-px h-16 bg-gradient-to-b from-transparent via-beige/60 to-transparent"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
      <CalendlyModal open={calendlyOpen && Boolean((import.meta as any).env?.VITE_CALENDLY_URL)} onClose={() => setCalendlyOpen(false)} />
    </motion.section>
  );
};

export default ElegantHero;
