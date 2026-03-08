import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const FinalCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding">
      <div className="section-container text-center">
        <div className="divider-elegant mb-10" />
        <h2 className="text-editorial-xl text-foreground max-w-3xl mx-auto whitespace-pre-line">{t("finalCta.headline")}</h2>
        <p className="text-body-lg mt-6 max-w-xl mx-auto">{t("finalCta.body")}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link to="/schedule"><Button variant="hero" size="xl">{t("finalCta.cta1")}</Button></Link>
          <Link to="/memberships"><Button variant="hero-outline" size="xl">{t("finalCta.cta2")}</Button></Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
