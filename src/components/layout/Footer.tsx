import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold text-foreground">
              Pomona Club
            </Link>
            <p className="text-body mt-4 text-sm">
              Where performance meets lifestyle. Boutique training, recovery, and nutrition in the heart of Madrid.
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
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] font-medium text-foreground mb-5">Experience</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/classes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Training & Classes</Link>
              <Link to="/recovery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Recovery & Wellness</Link>
              <Link to="/healthy-bar" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Healthy Bar</Link>
              <Link to="/schedule" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Schedule & Book</Link>
              <Link to="/trainers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Our Trainers</Link>
            </nav>
          </div>

          {/* Club */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] font-medium text-foreground mb-5">The Club</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/memberships" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Memberships</Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Pomona</Link>
              <Link to="/journal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Journal</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact & Visit</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] font-medium text-foreground mb-5">Visit Us</h4>
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
              <p className="mt-2 text-xs text-muted-foreground/70">
                Mon–Fri: 6:30–22:00<br />
                Sat–Sun: 8:00–20:00
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Pomona Club Madrid. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground/60">
            <a href="#" className="hover:text-muted-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-muted-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
