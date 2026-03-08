import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

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
              <a href="mailto:hello@pomonaclub.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] font-medium text-foreground mb-5">{t("footer.experience")}</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/classes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("footer.trainingClasses")}</Link>
              <Link to="/recovery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("footer.recoveryWellness")}</Link>
              <Link to="/healthy-bar" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("footer.healthyBar")}</Link>
              <Link to="/schedule" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("footer.scheduleBook")}</Link>
              <Link to="/trainers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("footer.ourTrainers")}</Link>
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
