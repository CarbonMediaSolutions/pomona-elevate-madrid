import Layout from "@/components/layout/Layout";
import Section from "@/components/layout/Section";
import PageHero from "@/components/layout/PageHero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-gym.jpg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const values = [
    { title: t("aboutPage.value1Title"), desc: t("aboutPage.value1Desc") },
    { title: t("aboutPage.value2Title"), desc: t("aboutPage.value2Desc") },
    { title: t("aboutPage.value3Title"), desc: t("aboutPage.value3Desc") },
    { title: t("aboutPage.value4Title"), desc: t("aboutPage.value4Desc") },
  ];

  return (
    <Layout>
      <PageHero
        image={heroImg}
        tag={t("aboutPage.tag")}
        headline={t("aboutPage.headline")}
      />

      <Section>
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h2 className="text-editorial-md text-foreground">{t("aboutPage.whyTitle")}</h2>
            <p className="text-body-lg mt-4">{t("aboutPage.whyBody1")}</p>
            <p className="text-body mt-4">{t("aboutPage.whyBody2")}</p>
          </div>
          <div className="divider-elegant !mx-0" />
          <div>
            <h2 className="text-editorial-md text-foreground">{t("aboutPage.differentTitle")}</h2>
            <p className="text-body-lg mt-4">{t("aboutPage.differentBody")}</p>
          </div>
          <div className="divider-elegant !mx-0" />
          <div>
            <h2 className="text-editorial-md text-foreground">{t("aboutPage.spaceTitle")}</h2>
            <p className="text-body-lg mt-4">{t("aboutPage.spaceBody1")}</p>
            <p className="text-body mt-4">{t("aboutPage.spaceBody2")}</p>
          </div>
          <div className="divider-elegant !mx-0" />
          <div>
            <h2 className="text-editorial-md text-foreground">{t("aboutPage.valuesTitle")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              {values.map((v) => (
                <div key={v.title} className="card-premium p-6">
                  <h3 className="font-serif text-lg text-foreground">{v.title}</h3>
                  <p className="text-body text-sm mt-2">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/30">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-editorial-md text-foreground">{t("aboutPage.ctaHeadline")}</h2>
          <p className="text-body-lg mt-4">{t("aboutPage.ctaBody")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/schedule"><Button variant="hero" size="lg">{t("aboutPage.bookTrial")}</Button></Link>
            <Link to="/contact"><Button variant="hero-outline" size="lg">{t("aboutPage.planVisit")}</Button></Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default About;
