import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useCmsSection } from "@/hooks/useCmsContent";

const FinalCTA = () => {
  const { t } = useTranslation();
  const cms = useCmsSection("home", "final-cta");

  const headline = (cms?.headline as string) || t("finalCta.headline");
  const body = (cms?.body as string) || t("finalCta.body");
  const cta1 = (cms?.cta1 as string) || t("finalCta.cta1");
  const cta2 = (cms?.cta2 as string) || t("finalCta.cta2");
  const cta1Link = (cms?.cta1Link as string) || "/schedule";
  const cta2Link = (cms?.cta2Link as string) || "/memberships";

  return (
    <section className="section-padding">
      <div className="section-container text-center">
        <div className="divider-elegant mb-10" />
        <h2 className="text-editorial-xl text-foreground max-w-3xl mx-auto whitespace-pre-line">{headline}</h2>
        <p className="text-body-lg mt-6 max-w-xl mx-auto">{body}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link to={cta1Link}><Button variant="hero" size="xl">{cta1}</Button></Link>
          <Link to={cta2Link}><Button variant="hero-outline" size="xl">{cta2}</Button></Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
