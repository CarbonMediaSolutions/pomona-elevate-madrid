import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Training", href: "/classes" },
  { label: "Recovery", href: "/recovery" },
  { label: "Healthy Bar", href: "/healthy-bar" },
  { label: "Memberships", href: "/memberships" },
  { label: "Trainers", href: "/trainers" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="section-container flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="font-serif text-xl md:text-2xl font-semibold tracking-tight text-foreground">
            Pomona Club
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/schedule" className="hidden md:block">
              <Button variant="hero" size="sm">
                Book a Session
              </Button>
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-foreground p-2"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/98 backdrop-blur-sm"
          >
            <div className="section-container flex flex-col h-full">
              <div className="flex items-center justify-between h-16">
                <Link to="/" className="font-serif text-xl font-semibold text-foreground">
                  Pomona Club
                </Link>
                <button onClick={() => setMobileOpen(false)} className="p-2 text-foreground" aria-label="Close menu">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1 mt-12">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      className="block py-3 text-2xl font-serif text-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto pb-10">
                <Link to="/schedule">
                  <Button variant="hero" size="xl" className="w-full">
                    Book Your First Session
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-md border-t border-border/50 p-3">
        <Link to="/schedule">
          <Button variant="hero" size="lg" className="w-full">
            Book a Session
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Header;
