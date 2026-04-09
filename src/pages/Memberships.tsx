import Layout from "@/components/layout/Layout";
import Section from "@/components/layout/Section";
import PageHero from "@/components/layout/PageHero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";
import heroImg from "@/assets/hero-gym.jpg";
import { useCmsSection } from "@/hooks/useCmsContent";

const Memberships = () => {
  const { t } = useTranslation();
  const cmsHero = useCmsSection("memberships", "hero");
  const cmsPlans = useCmsSection("memberships", "plans");
  const cmsTrial = useCmsSection("memberships", "trial");

  const faqs = t("membershipFaqs", { returnObjects: true }) as { q: string; a: string }[];

  const plans = [
    {
      name: (cmsPlans?.plans?.[0]?.name as string) || t("membership.essentials"),
      price: (cmsPlans?.plans?.[0]?.price as string) || "89",
      ideal: (cmsPlans?.plans?.[0]?.ideal as string) || t("membership.essentialsIdeal"),
      desc: (cmsPlans?.plans?.[0]?.desc as string) || t("membershipPlans.essentialsDesc"),
      features: (cmsPlans?.plans?.[0]?.features as string[]) || (t("membershipPlans.essentialsFeatures", { returnObjects: true }) as string[]),
      cta: (cmsPlans?.plans?.[0]?.cta as string) || t("membership.startEssentials"),
      featured: false,
    },
    {
      name: (cmsPlans?.plans?.[1]?.name as string) || t("membership.plus"),
      price: (cmsPlans?.plans?.[1]?.price as string) || "139",
      ideal: (cmsPlans?.plans?.[1]?.ideal as string) || t("membership.plusIdeal"),
      desc: (cmsPlans?.plans?.[1]?.desc as string) || t("membershipPlans.plusDesc"),
      features: (cmsPlans?.plans?.[1]?.features as string[]) || (t("membershipPlans.plusFeatures", { returnObjects: true }) as string[]),
      cta: (cmsPlans?.plans?.[1]?.cta as string) || t("membership.joinPlus"),
      featured: true,
    },
    {
      name: (cmsPlans?.plans?.[2]?.name as string) || t("membership.signature"),
      price: (cmsPlans?.plans?.[2]?.price as string) || "199",
      ideal: (cmsPlans?.plans?.[2]?.ideal as string) || t("membership.signatureIdeal"),
      desc: (cmsPlans?.plans?.[2]?.desc as string) || t("membershipPlans.signatureDesc"),
      features: (cmsPlans?.plans?.[2]?.features as string[]) || (t("membershipPlans.signatureFeatures", { returnObjects: true }) as string[]),
      cta: (cmsPlans?.plans?.[2]?.cta as string) || t("membership.goSignature"),
      featured: false,
    },
  ];

  return (
    <Layout>
      <PageHero
        image={heroImg}
        tag={(cmsHero?.tag as string) || t("membership.tag")}
        headline={(cmsHero?.headline as string) || t("membershipsPage.headline")}
        body={(cmsHero?.body as string) || t("membershipsPage.body")}
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`card-premium p-8 flex flex-col transition-all duration-500 ${plan.featured ? "border-primary/40 ring-1 ring-primary/20 relative overflow-visible" : ""}`}>
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest rounded-full text-primary-foreground" style={{ background: "var(--gradient-accent)" }}>
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
                {Array.isArray(plan.features) && plan.features.map((f) => (
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
          <h2 className="text-editorial-md text-foreground">{(cmsTrial?.headline as string) || t("membershipsPage.trialHeadline")}</h2>
          <p className="text-body-lg mt-4">{(cmsTrial?.body as string) || t("membershipsPage.trialBody")}</p>
          <Link to="/schedule" className="mt-8 inline-block">
            <Button variant="hero" size="xl">{(cmsTrial?.cta as string) || t("membershipsPage.bookTrial")}</Button>
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
