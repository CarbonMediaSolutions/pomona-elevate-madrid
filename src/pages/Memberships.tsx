import Layout from "@/components/layout/Layout";
import Section from "@/components/layout/Section";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

const faqs = [
  { q: "Can I try before I commit?", a: "Absolutely. We offer a complimentary first session so you can experience the club, meet our coaches, and find the right membership for you." },
  { q: "Can I pause or freeze my membership?", a: "Yes. All memberships include one free pause per year (up to 30 days). Additional freezes are available for medical or travel reasons." },
  { q: "Is there a minimum commitment?", a: "Club Essentials is month-to-month. Club Plus and Signature offer both monthly and annual options, with annual plans receiving a 15% discount." },
  { q: "Do you offer corporate memberships?", a: "Yes. We work with companies across Madrid to offer team wellness packages. Contact us for a tailored corporate proposal." },
  { q: "Can I bring a friend?", a: "Club Plus and Signature members receive guest passes each month. Day passes are also available for purchase at reception." },
  { q: "What's included in recovery access?", a: "Recovery suite access includes infrared sauna, traditional sauna, cold plunge guidance, and access to our recovery lounge. Physiotherapy is available as an add-on or included in higher tiers." },
];

const Memberships = () => {
  const { t } = useTranslation();

  const plans = [
    {
      name: t("membership.essentials"), price: "89",
      ideal: "For those building a consistent routine",
      desc: "Start your Pomona journey with flexible access to classes, the gym, and member-only bar pricing.",
      features: ["8 group classes per month", "Open gym access (off-peak)", "Healthy bar member pricing", "1 recovery session / month", "App booking & scheduling", "Locker & shower access"],
      cta: t("membership.startEssentials"), featured: false,
    },
    {
      name: t("membership.plus"), price: "139",
      ideal: "For committed performers who want more",
      desc: "Unlimited training, full recovery access, and the perks that make Pomona a daily destination.",
      features: ["Unlimited group classes", "Full open gym access (all hours)", "Recovery suite access (sauna, infrared)", "Priority class booking", "2 physiotherapy sessions / month", "Guest passes (2/month)", "Healthy bar perks & discounts", "Locker & towel service"],
      cta: t("membership.joinPlus"), featured: true,
    },
    {
      name: t("membership.signature"), price: "199",
      ideal: "The full Pomona immersion",
      desc: "Everything the club offers, with personal attention, premium recovery, and exclusive community access.",
      features: ["Everything in Club Plus", "Unlimited recovery & sauna", "Monthly 1-on-1 nutrition consultation", "1 personal training session / month", "Priority event & workshop access", "Exclusive Signature member events", "Premium laundry service", "VIP healthy bar experience"],
      cta: t("membership.goSignature"), featured: false,
    },
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="section-container text-center max-w-3xl mx-auto">
          <span className="pill-tag mb-6 inline-block">{t("membership.tag")}</span>
          <h1 className="text-editorial-xl text-foreground whitespace-pre-line">{t("membershipsPage.headline")}</h1>
          <p className="text-body-lg mt-6">{t("membershipsPage.body")}</p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`card-premium p-8 flex flex-col ${plan.featured ? "border-primary/40 ring-1 ring-primary/20" : ""}`}>
              {plan.featured && <span className="pill-tag text-[10px] self-start mb-4 border-primary/30 text-primary">{t("membership.mostPopular")}</span>}
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
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="card-premium px-6 border-border">
                <AccordionTrigger className="text-foreground font-medium text-left py-5 hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>
    </Layout>
  );
};

export default Memberships;
