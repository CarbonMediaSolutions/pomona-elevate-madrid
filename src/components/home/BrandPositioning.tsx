import Section from "@/components/layout/Section";
import { Dumbbell, Heart, Coffee, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const BrandPositioning = () => {
  const { t } = useTranslation();

  const pillars = [
    { icon: Dumbbell, label: t("brand.train"), desc: t("brand.trainDesc") },
    { icon: Heart, label: t("brand.recover"), desc: t("brand.recoverDesc") },
    { icon: Coffee, label: t("brand.refuel"), desc: t("brand.refuelDesc") },
    { icon: Users, label: t("brand.connect"), desc: t("brand.connectDesc") },
  ];

  return (
    <Section>
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="pill-tag mb-6 inline-block">{t("brand.tag")}</span>
        <h2 className="text-editorial-lg text-foreground whitespace-pre-line">
          {t("brand.headline")}
        </h2>
        <p className="text-body-lg mt-6">{t("brand.body")}</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {pillars.map((pillar) => (
          <div key={pillar.label} className="card-premium p-8 text-center group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors duration-300">
              <pillar.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-serif text-lg font-medium text-foreground mb-3">{pillar.label}</h3>
            <p className="text-body text-sm">{pillar.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default BrandPositioning;
