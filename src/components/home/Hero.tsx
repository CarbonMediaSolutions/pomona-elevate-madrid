import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-gym.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Pomona Club premium boutique gym interior in Madrid"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="image-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container pb-20 md:pb-28 lg:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="text-editorial-xl text-foreground">
            Where performance<br />meets lifestyle.
          </h1>

          <p className="text-body-lg mt-6 max-w-xl text-foreground/70">
            Boutique training, recovery, nutrition, and healthy social energy in the heart of Madrid.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link to="/schedule">
              <Button variant="hero" size="xl">
                Book Your First Session
              </Button>
            </Link>
            <Link to="/memberships">
              <Button variant="hero-outline" size="xl">
                Explore Memberships
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10 text-xs uppercase tracking-[0.15em] text-foreground/40 font-medium">
            <span>Boutique Training</span>
            <span className="text-primary">·</span>
            <span>Recovery</span>
            <span className="text-primary">·</span>
            <span>Healthy Bar</span>
            <span className="text-primary">·</span>
            <span>Expert-Led Coaching</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
