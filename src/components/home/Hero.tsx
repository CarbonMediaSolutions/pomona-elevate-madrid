import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const tags = t("hero.tags", { returnObjects: true }) as string[];

  return (
    <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster=""
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
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
          <h1 className="text-editorial-xl text-foreground whitespace-pre-line">
            {t("hero.headline")}
          </h1>

          <p className="text-body-lg mt-6 max-w-xl text-foreground/70">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link to="/schedule">
              <Button variant="hero" size="xl">
                {t("hero.cta1")}
              </Button>
            </Link>
            <Link to="/memberships">
              <Button variant="hero-outline" size="xl">
                {t("hero.cta2")}
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10 text-xs uppercase tracking-[0.15em] text-foreground/40 font-medium">
            {tags.map((tag, i) => (
              <span key={i}>
                {i > 0 && <span className="text-primary mr-6">·</span>}
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
