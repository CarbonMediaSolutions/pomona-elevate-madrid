import Section from "@/components/layout/Section";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import barImg from "@/assets/healthy-bar.jpg";
import { useTranslation } from "react-i18next";

const HealthyBarPreview = () => {
  const { t } = useTranslation();
  const tags = [t("healthyBarSection.smoothies"), t("healthyBarSection.specialtyCoffee"), "Salads & Pokes", "Tostadas", t("healthyBarSection.healthySnacks")];

  return (
    <Section className="bg-secondary/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
          <img src={barImg} alt="Pomona Club healthy bar with smoothies and coffee" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div>
          <span className="pill-tag mb-6 inline-block">{t("healthyBarSection.tag")}</span>
          <h2 className="text-editorial-lg text-foreground whitespace-pre-line">{t("healthyBarSection.headline")}</h2>
          <p className="text-body-lg mt-6">{t("healthyBarSection.body")}</p>
          <p className="text-body mt-4">{t("healthyBarSection.body2")}</p>
          <div className="flex flex-wrap gap-3 mt-8">
            {tags.map((item) => (<span key={item} className="pill-tag">{item}</span>))}
          </div>
          <Link to="/healthy-bar" className="mt-8 inline-block">
            <Button variant="hero-outline" size="lg">{t("healthyBarSection.exploreMenu")}</Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default HealthyBarPreview;
