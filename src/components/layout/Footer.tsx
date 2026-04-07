import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.21 8.21 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.14z" />
  </svg>
);

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  return (
    <footer className="border-t border-border bg-background">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <img src="/pomona-club.svg" alt="Pomona Club" className="h-6 w-auto" />
            </Link>
            <p className="text-body mt-4 text-sm">
              {t("footer.tagline")}
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com/pomonaclub" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://tiktok.com/@pomonaclub" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="TikTok">
                <TikTokIcon />
              </a>
              <a href="mailto:hello@pomonaclub.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium mb-3">{t("footer.newsletter")}</p>
              <form
                onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
                className="flex gap-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("footer.emailPlaceholder")}
                  className="flex-1 min-w-0 bg-secondary border border-border rounded-md px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                />
                <Button variant="hero" size="sm" type="submit" className="shrink-0 text-xs px-3">
                  →
                </Button>
              </form>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] font-medium text-foreground mb-5">{t("footer.experience")}</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/classes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("footer.trainingClasses")}</Link>
              <Link to="/wellness" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("footer.wellness")}</Link>
              <Link to="/healthy-bar" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("footer.healthyBar")}</Link>
              <Link to="/schedule" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("footer.scheduleBook")}</Link>
              
            </nav>
          </div>

          {/* Club */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] font-medium text-foreground mb-5">{t("footer.theClub")}</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/memberships" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("footer.memberships")}</Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("footer.aboutPomona")}</Link>
              <Link to="/journal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("footer.journal")}</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("footer.contactVisit")}</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] font-medium text-foreground mb-5">{t("footer.visitUs")}</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Calle de Serrano 45, 28001 Madrid</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+34 910 123 456</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>hello@pomonaclub.com</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground/70 whitespace-pre-line">
                {t("footer.hours")}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60">
            {t("footer.rights", { year: new Date().getFullYear() })}
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground/60">
            <a href="#" className="hover:text-muted-foreground transition-colors">{t("footer.privacy")}</a>
            <a href="#" className="hover:text-muted-foreground transition-colors">{t("footer.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
