import Layout from "@/components/layout/Layout";
import Section from "@/components/layout/Section";
import PageHero from "@/components/layout/PageHero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";
import heroImg from "@/assets/hero-gym.jpg";

const Memberships = () => {
  const { t } = useTranslation();

  const faqs = t("membershipFaqs", { returnObjects: true }) as { q: string; a: string }[];

  const plans = [
    {
      name: t("membership.essentials"), price: "89",
      ideal: t("membership.essentialsIdeal"),
      desc: t("membershipPlans.essentialsDesc"),
      features: t("membershipPlans.essentialsFeatures", { returnObjects: true }) as string[],
      cta: t("membership.startEssentials"), featured: false,
    },
    {
      name: t("membership.plus"), price: "139",
      ideal: t("membership.plusIdeal"),
      desc: t("membershipPlans.plusDesc"),
      features: t("membershipPlans.plusFeatures", { returnObjects: true }) as string[],
      cta: t("membership.joinPlus"), featured: true,
    },
    {
      name: t("membership.signature"), price: "199",
      ideal: t("membership.signatureIdeal"),
      desc: t("membershipPlans.signatureDesc"),
      features: t("membershipPlans.signatureFeatures", { returnObjects: true }) as string[],
      cta: t("membership.goSignature"), featured: false,
    },
  ];

  return (
    <Layout>
      <PageHero
        image={heroImg}
        tag={t("membership.tag")}
        headline={t("membershipsPage.headline")}
        body={t("membershipsPage.body")}
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`card-premium p-8 flex flex-col transition-all duration-500 ${
                plan.featured
                  ? "border-primary/40 ring-1 ring-primary/20 relative overflow-visible"
                  : ""
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest rounded-full text-primary-foreground"
                    style={{ background: "var(--gradient-accent)" }}>
                    <Sparkles className="w-3 h-3" />
                    {t("membership.mostPopular")}
                  </span>
                </div>
              )}
              <h2 className="font-serif text-2xl text-foreground">{plan.name}</h2>
              <p className="text-sm text-muted-foreground mt-1">{plan.ideal}</p>
              <p className="text-body text-sm mt-3">{plan.desc}</p>
              <div className="mt-6 mb-6">
                <span className="text-4xl font-serif font-semibold text-foreground">€{plan.price}</span>
                <span className="text-sm text-muted-foreground">{t("membership.month")}</span>
              </div>
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-secondary-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />{f}
                  </li>
                ))}
              </ul>
              <Link to="/schedule" className="mt-8">
                <Button variant={plan.featured ? "hero" : "hero-outline"} size="lg" className="w-full">{plan.cta}</Button>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/schedule" className="text-sm text-primary hover:underline underline-offset-4">{t("membership.trialLink")}</Link>
        </div>
      </Section>

      <Section className="bg-secondary/30">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-editorial-md text-foreground">{t("membershipsPage.trialHeadline")}</h2>
          <p className="text-body-lg mt-4">{t("membershipsPage.trialBody")}</p>
          <Link to="/schedule" className="mt-8 inline-block">
            <Button variant="hero" size="xl">{t("membershipsPage.bookTrial")}</Button>
          </Link>
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-editorial-md text-foreground">{t("membershipsPage.faqHeadline")}</h2>
          </div>
          {Array.isArray(faqs) && (
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="card-premium px-6 border-border">
                  <AccordionTrigger className="text-foreground font-medium text-left py-5 hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </Section>
    </Layout>
  );
};

export default Memberships;
