import Section from "@/components/layout/Section";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import barImg from "@/assets/healthy-bar-bowl.png";
import { useTranslation } from "react-i18next";
import { useCmsSection } from "@/hooks/useCmsContent";

const HealthyBarPreview = () => {
  const { t } = useTranslation();
  const cms = useCmsSection("home", "healthy-bar-preview");

  const tag = (cms?.tag as string) || t("healthyBarSection.tag");
  const headline = (cms?.headline as string) || t("healthyBarSection.headline");
  const body = (cms?.body as string) || t("healthyBarSection.body");
  const body2 = (cms?.body2 as string) || t("healthyBarSection.body2");
  const exploreMenu = (cms?.exploreMenu as string) || t("healthyBarSection.exploreMenu");
  const tags = (cms?.tags as string[]) || [t("healthyBarSection.smoothies"), t("healthyBarSection.specialtyCoffee"), t("healthyBarSection.saladsAndPokes"), t("healthyBarSection.tostadas"), t("healthyBarSection.healthySnacks")];

  return (
    <Section className="bg-secondary/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
          <img src={barImg} alt="Pomona Club healthy bar with smoothies and coffee" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div>
          <span className="pill-tag mb-6 inline-block">{tag}</span>
          <h2 className="text-editorial-lg text-foreground whitespace-pre-line">{headline}</h2>
          <p className="text-body-lg mt-6">{body}</p>
          <p className="text-body mt-4">{body2}</p>
          <div className="flex flex-wrap gap-3 mt-8">
            {tags.map((item) => (<span key={item} className="pill-tag">{item}</span>))}
          </div>
          <Link to="/healthy-bar" className="mt-8 inline-block">
            <Button variant="hero-outline" size="lg">{exploreMenu}</Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default HealthyBarPreview;
