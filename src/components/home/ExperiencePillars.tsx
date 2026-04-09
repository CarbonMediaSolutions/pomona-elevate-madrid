import Section from "@/components/layout/Section";
import { Link } from "react-router-dom";
import saunaImg from "@/assets/sauna-finnish.png";
import trainImg from "@/assets/pillar-train.png";
import barImg from "@/assets/pillar-bar.png";
import belongImg from "@/assets/pillar-belong.png";
import { useTranslation } from "react-i18next";
import { useCmsSection } from "@/hooks/useCmsContent";

const ExperiencePillars = () => {
  const { t } = useTranslation();
  const cms = useCmsSection("home", "experience-pillars");

  const tag = (cms?.tag as string) || t("pillars.tag");
  const headline = (cms?.headline as string) || t("pillars.headline");

  const defaultPillars = [
    { title: t("pillars.trainTitle"), desc: t("pillars.trainDesc"), image: trainImg, link: "/classes", tags: [t("pillars.coachLed"), t("pillars.smallGroup")] },
    { title: t("pillars.recoverTitle"), desc: t("pillars.recoverDesc"), image: saunaImg, link: "/wellness", tags: [t("pillars.recoveryFirst"), t("pillars.scienceBacked")] },
    { title: t("pillars.refuelTitle"), desc: t("pillars.refuelDesc"), image: barImg, link: "/healthy-bar", tags: [t("pillars.postWorkout"), t("pillars.social")] },
    { title: t("pillars.belongTitle"), desc: t("pillars.belongDesc"), image: belongImg, link: "/about", tags: [t("pillars.communityEnergy"), t("pillars.lifestyle")] },
  ];

  const pillars = defaultPillars.map((p, i) => ({
    ...p,
    title: (cms?.pillars?.[i]?.title as string) || p.title,
    desc: (cms?.pillars?.[i]?.desc as string) || p.desc,
    tags: (cms?.pillars?.[i]?.tags as string[]) || p.tags,
  }));

  return (
    <Section className="bg-secondary/30">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="pill-tag mb-6 inline-block">{tag}</span>
        <h2 className="text-editorial-lg text-foreground">{headline}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.map((p) => (
          <Link to={p.link} key={p.title} className="card-premium group overflow-hidden">
            <div className="relative h-64 overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              <div className="absolute bottom-4 left-4 flex gap-2">
                {p.tags.map((ptag) => (
                  <span key={ptag} className="pill-tag text-[10px] bg-background/50 backdrop-blur-sm border-foreground/10">{ptag}</span>
                ))}
              </div>
            </div>
            <div className="p-6 lg:p-8">
              <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-3">{p.title}</h3>
              <p className="text-body text-sm">{p.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
};

export default ExperiencePillars;
