import Section from "@/components/layout/Section";
import { Star, Quote } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const testimonials = [
  {
    name: "Marta G.",
    role: "Architect & HYROX competitor",
    quote: "Pomona changed how I think about training. It's not just the sessions — it's the recovery, the food, the people. I've never been more consistent.",
  },
  {
    name: "Carlos R.",
    role: "Tech founder",
    quote: "I joined for the gym and stayed for the community. The coaches genuinely care, and the healthy bar is my second office after every morning session.",
  },
  {
    name: "Elena S.",
    role: "Wellness consultant",
    quote: "The recovery suite alone is worth the membership. Infrared sauna after Pilates, then a smoothie at the bar — it's the best part of my week.",
  },
  {
    name: "Javier M.",
    role: "Professional runner",
    quote: "The running club and HYROX prep at Pomona are next-level. Small groups, smart programming, real results. This is what boutique fitness should be.",
  },
];

const SocialProof = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);

  const stats = [
    { value: "2,500+", label: t("social.activeMembers") },
    { value: "40+", label: t("social.weeklyClasses") },
    { value: "12", label: t("social.expertCoaches") },
    { value: "4.9", label: t("social.averageRating") },
  ];

  return (
    <Section className="bg-secondary/30">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="pill-tag mb-6 inline-block">{t("social.tag")}</span>
        <h2 className="text-editorial-lg text-foreground whitespace-pre-line">{t("social.headline")}</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl md:text-4xl font-serif font-semibold gradient-text">{stat.value}</div>
            <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mt-2">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="card-premium p-8 lg:p-12 text-center">
          <Quote className="w-8 h-8 text-primary/30 mx-auto mb-6" />
          <p className="font-serif text-xl lg:text-2xl text-foreground leading-relaxed italic">
            "{testimonials[active].quote}"
          </p>
          <div className="mt-8">
            <div className="font-medium text-foreground">{testimonials[active].name}</div>
            <div className="text-sm text-muted-foreground">{testimonials[active].role}</div>
          </div>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-accent text-accent" />
            ))}
          </div>
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
