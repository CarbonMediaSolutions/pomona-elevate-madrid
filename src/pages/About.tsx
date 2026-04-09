import Layout from "@/components/layout/Layout";
import Section from "@/components/layout/Section";
import PageHero from "@/components/layout/PageHero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-gym.jpg";
import { useTranslation } from "react-i18next";
import { useCmsSection } from "@/hooks/useCmsContent";

const About = () => {
  const { t } = useTranslation();
  const cmsHero = useCmsSection("about", "hero");
  const cmsContent = useCmsSection("about", "content");
  const cmsCta = useCmsSection("about", "cta");

  const values = [
    { title: (cmsContent?.value1Title as string) || t("aboutPage.value1Title"), desc: (cmsContent?.value1Desc as string) || t("aboutPage.value1Desc") },
    { title: (cmsContent?.value2Title as string) || t("aboutPage.value2Title"), desc: (cmsContent?.value2Desc as string) || t("aboutPage.value2Desc") },
    { title: (cmsContent?.value3Title as string) || t("aboutPage.value3Title"), desc: (cmsContent?.value3Desc as string) || t("aboutPage.value3Desc") },
    { title: (cmsContent?.value4Title as string) || t("aboutPage.value4Title"), desc: (cmsContent?.value4Desc as string) || t("aboutPage.value4Desc") },
  ];

  return (
    <Layout>
      <PageHero
        image={heroImg}
        tag={(cmsHero?.tag as string) || t("aboutPage.tag")}
        headline={(cmsHero?.headline as string) || t("aboutPage.headline")}
      />

      <Section>
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h2 className="text-editorial-md text-foreground">{(cmsContent?.whyTitle as string) || t("aboutPage.whyTitle")}</h2>
            <p className="text-body-lg mt-4">{(cmsContent?.whyBody1 as string) || t("aboutPage.whyBody1")}</p>
            <p className="text-body mt-4">{(cmsContent?.whyBody2 as string) || t("aboutPage.whyBody2")}</p>
          </div>
          <div className="divider-elegant !mx-0" />
          <div>
            <h2 className="text-editorial-md text-foreground">{(cmsContent?.differentTitle as string) || t("aboutPage.differentTitle")}</h2>
            <p className="text-body-lg mt-4">{(cmsContent?.differentBody as string) || t("aboutPage.differentBody")}</p>
          </div>
          <div className="divider-elegant !mx-0" />
          <div>
            <h2 className="text-editorial-md text-foreground">{(cmsContent?.spaceTitle as string) || t("aboutPage.spaceTitle")}</h2>
            <p className="text-body-lg mt-4">{(cmsContent?.spaceBody1 as string) || t("aboutPage.spaceBody1")}</p>
            <p className="text-body mt-4">{(cmsContent?.spaceBody2 as string) || t("aboutPage.spaceBody2")}</p>
          </div>
          <div className="divider-elegant !mx-0" />
          <div>
            <h2 className="text-editorial-md text-foreground">{(cmsContent?.valuesTitle as string) || t("aboutPage.valuesTitle")}</h2>
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
          <h2 className="text-editorial-md text-foreground">{(cmsCta?.headline as string) || t("aboutPage.ctaHeadline")}</h2>
          <p className="text-body-lg mt-4">{(cmsCta?.body as string) || t("aboutPage.ctaBody")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/schedule"><Button variant="hero" size="lg">{(cmsCta?.bookTrial as string) || t("aboutPage.bookTrial")}</Button></Link>
            <Link to="/contact"><Button variant="hero-outline" size="lg">{(cmsCta?.planVisit as string) || t("aboutPage.planVisit")}</Button></Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default About;
