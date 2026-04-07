import Layout from "@/components/layout/Layout";
import Section from "@/components/layout/Section";
import PageHero from "@/components/layout/PageHero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import saunaFinnish from "@/assets/sauna-finnish.png";
import saunaInfrared from "@/assets/sauna-infrared.png";
import chromotherapy from "@/assets/chromotherapy.png";
import { useTranslation } from "react-i18next";

const services = [
  { key: "finnish", image: saunaFinnish },
  { key: "infrared", image: saunaInfrared },
  { key: "chromotherapy", image: chromotherapy },
];

const Wellness = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <PageHero
        image={saunaFinnish}
        tag={t("wellnessPage.tag")}
        headline={t("wellnessPage.headline")}
        body={t("wellnessPage.body")}
      />

      <Section>
        <div className="flex flex-col gap-20 lg:gap-28">
          {services.map((s, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <div
                key={s.key}
                className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-16 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="card-premium overflow-hidden rounded-xl">
                    <img
                      src={s.image}
                      alt={t(`wellnessPage.${s.key}Title`)}
                      className="w-full h-[300px] lg:h-[420px] object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-4">
                    {t(`wellnessPage.${s.key}Title`)}
                  </h2>
                  <p className="text-body mb-4">
                    {t(`wellnessPage.${s.key}Desc1`)}
                  </p>
                  <p className="text-body">
                    {t(`wellnessPage.${s.key}Desc2`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="bg-secondary/30">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-editorial-md text-foreground">{t("wellnessPage.ctaHeadline")}</h2>
          <p className="text-body-lg mt-4">{t("wellnessPage.ctaBody")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/memberships"><Button variant="hero" size="lg">{t("wellnessPage.viewMemberships")}</Button></Link>
            <Link to="/schedule"><Button variant="hero-outline" size="lg">{t("wellnessPage.bookSession")}</Button></Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Wellness;
