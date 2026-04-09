import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navGroups = [
    {
      label: t("nav.experience"),
      children: [
        { label: t("nav.training"), href: "/classes" },
        { label: t("nav.wellness"), href: "/wellness" },
        { label: t("nav.healthyBar"), href: "/healthy-bar" },
      ],
    },
    {
      label: t("nav.club"),
      children: [
        { label: t("nav.memberships"), href: "/memberships" },
        
        { label: t("nav.about"), href: "/about" },
      ],
    },
    { label: "Costa Brava 2026", href: "/costa-brava-2026" },
    { label: t("nav.journal"), href: "/journal" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

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
          <Link to="/" className="shrink-0">
            <img
              src="/pomona-club.svg"
              alt="Pomona Club"
              className="h-6 md:h-7 w-auto"
            />
          </Link>

          <nav ref={dropdownRef} className="hidden lg:flex items-center gap-6">
            {navGroups.map((item) =>
              "children" in item && item.children ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="flex items-center gap-1 text-xs uppercase tracking-[0.15em] font-medium text-foreground/80 hover:text-foreground transition-colors duration-300"
                  >
                    {item.label}
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-3 min-w-[180px] bg-card/95 backdrop-blur-md border border-border rounded-lg shadow-lg py-2"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={(item as { label: string; href: string }).href}
                  className="text-xs uppercase tracking-[0.15em] font-medium text-foreground/80 hover:text-foreground transition-colors duration-300"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 text-xs uppercase tracking-[0.15em] font-medium text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5" />
              {i18n.language === "es" ? t("lang.en") : t("lang.es")}
            </button>
            <Link to="/schedule" className="hidden md:block">
              <Button variant="hero" size="sm">
                {t("nav.bookSession")}
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
                <Link to="/" className="shrink-0">
                  <img src="/pomona-club.svg" alt="Pomona Club" className="h-6 w-auto" />
                </Link>
                <button onClick={() => setMobileOpen(false)} className="p-2 text-foreground" aria-label="Close menu">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1 mt-12">
                {navGroups.map((item, i) =>
                  "children" in item && item.children ? (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium pt-6 pb-2">
                        {item.label}
                      </div>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block py-2.5 text-2xl font-serif text-foreground hover:text-primary transition-colors pl-2"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={(item as { label: string; href: string }).href}
                        className="block py-3 text-2xl font-serif text-foreground hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  )
                )}
              </nav>

              <div className="mt-auto pb-10 flex flex-col gap-3">
                <button
                  onClick={toggleLang}
                  className="flex items-center justify-center gap-2 text-sm text-muted-foreground py-3"
                >
                  <Globe className="w-4 h-4" />
                  {i18n.language === "es" ? "Switch to English" : "Cambiar a Español"}
                </button>
                <Link to="/schedule">
                  <Button variant="hero" size="xl" className="w-full">
                    {t("hero.cta1")}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-md border-t border-border/50 px-4 py-3.5 shadow-[0_-8px_30px_-10px_hsl(0_0%_0%/0.4)]">
        <Link to="/schedule">
          <Button variant="hero" size="lg" className="w-full text-sm font-semibold tracking-wide">
            {t("nav.bookSession")}
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Header;
