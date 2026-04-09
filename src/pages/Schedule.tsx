import Layout from "@/components/layout/Layout";
import Section from "@/components/layout/Section";
import PageHero from "@/components/layout/PageHero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import openGymImg from "@/assets/open-gym.jpg";
import { useCmsSection } from "@/hooks/useCmsContent";

const Schedule = () => {
  const { t } = useTranslation();
  const cmsHero = useCmsSection("schedule", "hero");
  const cmsTrial = useCmsSection("schedule", "trial");
  const cmsUpsell = useCmsSection("schedule", "upsell");

  return (
    <Layout>
      <PageHero
        image={openGymImg}
        tag={(cmsHero?.tag as string) || t("schedulePage.tag")}
        headline={(cmsHero?.headline as string) || t("schedulePage.headline")}
        body={(cmsHero?.body as string) || t("schedulePage.body")}
      />

      <div className="section-container my-12">
        <div className="card-premium p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-lg text-foreground">{(cmsTrial?.headline as string) || t("schedulePage.trialHeadline")}</h3>
            <p className="text-sm text-muted-foreground">{(cmsTrial?.body as string) || t("schedulePage.trialBody")}</p>
          </div>
          <Button variant="hero" size="lg" className="shrink-0">{(cmsTrial?.cta as string) || t("schedulePage.bookTrial")}</Button>
        </div>
      </div>

      <Section>
        <div className="card-premium overflow-hidden rounded-xl">
          <iframe
            src="https://app.glofox.com/portal/#/branch/660d6658f351bda23f05d487/classes-week-view?header=classes,courses,memberships"
            frameBorder="0"
            width="100%"
            height="1200"
            title="Book a Class"
            className="w-full border-0"
          />
        </div>
      </Section>

      <Section className="bg-secondary/30">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-editorial-md text-foreground">{(cmsUpsell?.headline as string) || t("schedulePage.upsellHeadline")}</h2>
          <p className="text-body-lg mt-4">{(cmsUpsell?.body as string) || t("schedulePage.upsellBody")}</p>
          <Link to="/memberships" className="mt-8 inline-block">
            <Button variant="hero" size="lg">{(cmsUpsell?.cta as string) || t("schedulePage.compareMemberships")}</Button>
          </Link>
        </div>
      </Section>
    </Layout>
  );
};

export default Schedule;
