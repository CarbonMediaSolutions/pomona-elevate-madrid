import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import { useCmsSection } from "@/hooks/useCmsContent";

const Hero = () => {
  const { t } = useTranslation();
  const cms = useCmsSection("home", "hero");

  const headline = (cms?.headline as string) || t("hero.headline");
  const subtitle = (cms?.subtitle as string) || t("hero.subtitle");
  const cta1 = (cms?.cta1 as string) || t("hero.cta1");
  const cta2 = (cms?.cta2 as string) || t("hero.cta2");
  const tags = (cms?.tags as string[]) || (t("hero.tags", { returnObjects: true }) as string[]);

  return (
    <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover" poster="">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
      </div>

      <div className="relative z-10 section-container pb-20 md:pb-28 lg:pb-36">
        <div className="max-w-3xl">
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }} className="text-editorial-xl text-foreground whitespace-pre-line">
            {headline}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }} className="text-body-lg mt-6 max-w-xl text-foreground/70">
            {subtitle}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 }} className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link to="/schedule"><Button variant="hero" size="xl">{cta1}</Button></Link>
            <Link to="/memberships"><Button variant="hero-outline" size="xl">{cta2}</Button></Link>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className="flex flex-wrap gap-x-6 gap-y-2 mt-10 text-xs uppercase tracking-[0.15em] text-foreground/40 font-medium">
            {tags.map((tag, i) => (
              <span key={i}>{i > 0 && <span className="text-primary mr-6">·</span>}{tag}</span>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 1 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown className="w-5 h-5 text-foreground/30" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
