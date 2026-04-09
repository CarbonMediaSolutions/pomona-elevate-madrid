import Section from "@/components/layout/Section";
import { Star, Quote } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useCmsSection } from "@/hooks/useCmsContent";

const useAnimatedCounter = (end: number, duration: number = 1.5, inView: boolean = false) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = (Date.now() - startTime) / (duration * 1000);
      if (elapsed >= 1) {
        setCount(end);
        clearInterval(timer);
      } else {
        const eased = 1 - Math.pow(1 - elapsed, 3);
        setCount(Math.floor(eased * end));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [end, duration, inView]);

  return count;
};

const SocialProof = () => {
  const { t } = useTranslation();
  const cms = useCmsSection("home", "social-proof");
  const [active, setActive] = useState(0);
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  const tag = (cms?.tag as string) || t("social.tag");
  const headline = (cms?.headline as string) || t("social.headline");

  const testimonials = (cms?.testimonials as { name: string; role: string; quote: string }[]) ||
    (t("social.testimonials", { returnObjects: true }) as { name: string; role: string; quote: string }[]);

  const memberCount = useAnimatedCounter(2500, 1.5, statsInView);
  const classCount = useAnimatedCounter(40, 1.2, statsInView);
  const coachCount = useAnimatedCounter(12, 1, statsInView);
  const ratingWhole = useAnimatedCounter(4, 1, statsInView);

  useEffect(() => {
    if (!Array.isArray(testimonials) || testimonials.length === 0) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials]);

  const stats = [
    { value: `${memberCount.toLocaleString()}+`, label: (cms?.activeMembersLabel as string) || t("social.activeMembers") },
    { value: `${classCount}+`, label: (cms?.weeklyClassesLabel as string) || t("social.weeklyClasses") },
    { value: `${coachCount}`, label: (cms?.expertCoachesLabel as string) || t("social.expertCoaches") },
    { value: `${ratingWhole}.9`, label: (cms?.averageRatingLabel as string) || t("social.averageRating") },
  ];

  if (!Array.isArray(testimonials)) return null;

  return (
    <Section className="bg-secondary/30">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="pill-tag mb-6 inline-block">{tag}</span>
        <h2 className="text-editorial-lg text-foreground whitespace-pre-line">{headline}</h2>
      </div>

      <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl md:text-4xl font-serif font-semibold gradient-text">{stat.value}</div>
            <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mt-2">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="card-premium p-8 lg:p-12 text-center relative overflow-hidden min-h-[280px] flex flex-col items-center justify-center">
          <Quote className="w-8 h-8 text-primary/30 mx-auto mb-6" />
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4, ease: "easeInOut" }}>
              <p className="font-serif text-xl lg:text-2xl text-foreground leading-relaxed italic">
                "{testimonials[active]?.quote}"
              </p>
              <div className="mt-8">
                <div className="font-medium text-foreground">{testimonials[active]?.name}</div>
                <div className="text-sm text-muted-foreground">{testimonials[active]?.role}</div>
              </div>
              <div className="flex items-center justify-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === active ? "bg-primary w-6" : "bg-border"}`} aria-label={`Testimonial ${i + 1}`} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SocialProof;
