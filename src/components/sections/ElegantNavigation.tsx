import { useState, useEffect, useCallback, memo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import CalendlyModal from "./CalendlyModal";

const ElegantNavigation = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  // Throttled scroll handler for better performance
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const preloadRoute = useCallback((label: string) => {
    // Preload route chunks on hover/focus for instant nav
    switch (label) {
      case "Services":
        import("../../pages/Services");
        break;
      case "Process":
        import("../../pages/Process");
        break;
      case "About":
        import("../../pages/About");
        break;
      case "Work":
        import("../../pages/Work");
        break;
      case "Partners":
        import("../../pages/Partners");
        break;
      default:
        break;
    }
  }, []);

  const handleNavigation = useCallback(
    (itemId: string, itemLabel: string) => {
      setIsMobileMenuOpen(false);

      if (itemId === "hero") {
        navigate("/");
      } else if (itemLabel === "Services") {
        navigate("/services");
      } else if (itemLabel === "Process") {
        navigate("/process");
      } else if (itemLabel === "About") {
        navigate("/about");
      } else if (itemLabel === "Work") {
        navigate("/work");
      } else if (itemLabel === "Partners") {
        navigate("/partners");
      } else if (location.pathname === "/") {
        const element = document.getElementById(itemId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        navigate("/");
      }
    },
    [navigate, location.pathname],
  );

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "services", label: "Services" },
    { id: "process", label: "Process" },
    { id: "work", label: "Work" },
    { id: "partners", label: "Partners" },
    { id: "about", label: "About" },
  ];

  const isActiveItem = (itemLabel: string) => {
    if (location.pathname === "/" && itemLabel === "Home") return true;
    if (location.pathname === "/services" && itemLabel === "Services")
      return true;
    if (location.pathname === "/process" && itemLabel === "Process")
      return true;
    if (location.pathname === "/about" && itemLabel === "About") return true;
    if (location.pathname === "/work" && itemLabel === "Work") return true;
    if (location.pathname === "/partners" && itemLabel === "Partners")
      return true;
    return false;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-sm border-b border-gray-800/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 border border-beige/60 rounded relative flex items-center justify-center">
                <span className="text-beige font-medium text-xs sm:text-sm">
                  S
                </span>
                <svg className="absolute -top-2 left-1/2 -translate-x-1/2 text-beige w-6 h-4 sm:w-7 sm:h-4 pointer-events-none" viewBox="0 0 24 14" fill="none" aria-hidden="true">
                  <path d="M3 11 A9 9 0 0 1 21 11" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
                  <path d="M6 11 v3" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
                  <path d="M18 11 v3" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
                </svg>
              </div>
              <span className="text-gray-100 font-medium text-base sm:text-lg tracking-wide">
                Dev Studio
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onMouseEnter={() => preloadRoute(item.label)}
                  onFocus={() => preloadRoute(item.label)}
                  onClick={() => handleNavigation(item.id, item.label)}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActiveItem(item.label)
                      ? "text-beige"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {item.label}
                  {isActiveItem(item.label) && (
                    <div className="absolute bottom-[-6px] left-0 right-0 h-px bg-beige" />
                  )}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden sm:block">
              <Button
                onClick={() => {
                  const url = (import.meta as any).env?.VITE_CALENDLY_URL as string | undefined;
                  if (url) {
                    setCalendlyOpen(true);
                  } else {
                    handleNavigation("contact", "Contact");
                  }
                }}
                className="elegant-button px-4 lg:px-6 py-2 text-xs lg:text-sm font-medium tracking-wide rounded transition-all duration-200"
              >
                <span className="hidden md:inline">Start the Conversation</span>
                <span className="md:hidden">Contact</span>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-gray-300 hover:text-beige transition-colors duration-200 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Simple Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="relative flex flex-col h-full bg-black/98 border-l border-beige/10">
            {/* Mobile menu header */}
            <div className="flex items-center justify-between p-5 border-b border-beige/20">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 border border-beige/60 rounded relative flex items-center justify-center">
                  <span className="text-beige font-medium text-xs">S</span>
                  <svg className="absolute -top-2 left-1/2 -translate-x-1/2 text-beige w-6 h-4 pointer-events-none" viewBox="0 0 24 14" fill="none" aria-hidden="true">
                    <path d="M3 11 A9 9 0 0 1 21 11" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
                    <path d="M6 11 v3" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
                    <path d="M18 11 v3" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
                  </svg>
                </div>
                <span className="text-gray-100 font-medium text-base tracking-wide">
                  Dev Studio
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-beige transition-colors p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile navigation */}
            <div className="flex-1 flex flex-col justify-start pt-8 px-6 pb-20">
              <nav className="space-y-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id, item.label)}
                    className={`block w-full text-left py-3 px-4 rounded-xl transition-colors ${
                      isActiveItem(item.label)
                        ? "text-beige bg-beige/10"
                        : "text-gray-300 hover:text-beige hover:bg-beige/5"
                    }`}
                  >
                    <span className="text-xl font-medium tracking-wide">
                      {item.label}
                    </span>
                  </button>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="mt-12">
                <Button
                  onClick={() => handleNavigation("contact", "Contact")}
                  className="w-full elegant-button px-6 py-4 text-base font-medium tracking-wide rounded-xl"
                >
                  Start the Conversation
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      <CalendlyModal open={calendlyOpen && Boolean((import.meta as any).env?.VITE_CALENDLY_URL)} onClose={() => setCalendlyOpen(false)} />
    </>
  );
});

ElegantNavigation.displayName = "ElegantNavigation";

export default ElegantNavigation;
