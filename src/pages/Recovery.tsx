import Layout from "@/components/layout/Layout";
import Section from "@/components/layout/Section";
import PageHero from "@/components/layout/PageHero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import recoveryImg from "@/assets/recovery-room.jpg";
import { useTranslation } from "react-i18next";

const services = [
  { name: "Infrared Sauna", desc: "Deep tissue heat therapy that promotes muscle recovery, detoxification, and improved circulation.", benefit: "Reduces inflammation, improves sleep, accelerates recovery", duration: "30 min" },
  { name: "Traditional Sauna", desc: "Classic Finnish sauna experience for relaxation, cardiovascular health, and post-workout recovery.", benefit: "Stress reduction, muscle relaxation, immune support", duration: "20–30 min" },
  { name: "Physiotherapy", desc: "One-on-one sessions with licensed physiotherapists specializing in sports rehabilitation and movement optimization.", benefit: "Injury recovery, movement assessment, pain management", duration: "45–60 min" },
  { name: "Mobility & Restoration", desc: "Guided sessions combining fascial release, joint mobilization, and breathwork.", benefit: "Flexibility, nervous system reset, injury prevention", duration: "40 min" },
  { name: "Nutrition Guidance", desc: "Personalized nutrition consultations with our performance nutritionist.", benefit: "Optimized performance, body composition, energy", duration: "60 min consult" },
];

const Recovery = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <PageHero
        image={recoveryImg}
        tag={t("recoveryPage.tag")}
        headline={t("recoveryPage.headline")}
        body={t("recoveryPage.body")}
      />

      <Section>
        <div className="flex flex-col gap-6">
          {services.map((s) => (
            <div key={s.name} className="card-premium p-6 lg:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-1">
                  <h3 className="font-serif text-xl text-foreground">{s.name}</h3>
                  <p className="text-body mt-2">{s.desc}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 shrink-0">
                  <div>
                    <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">{t("recoveryPage.benefit")}</div>
                    <div className="text-sm text-foreground">{s.benefit}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">{t("recoveryPage.duration")}</div>
                    <div className="text-sm text-foreground">{s.duration}</div>
                  </div>
                  <Link to="/schedule"><Button variant="hero-outline" size="sm">{t("recoveryPage.book")}</Button></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/30">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-editorial-md text-foreground">{t("recoveryPage.ctaHeadline")}</h2>
          <p className="text-body-lg mt-4">{t("recoveryPage.ctaBody")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/memberships"><Button variant="hero" size="lg">{t("recoveryPage.viewMemberships")}</Button></Link>
            <Link to="/schedule"><Button variant="hero-outline" size="lg">{t("recoveryPage.bookSession")}</Button></Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Recovery;
