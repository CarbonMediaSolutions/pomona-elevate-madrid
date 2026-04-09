import Section from "@/components/layout/Section";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useCmsSection } from "@/hooks/useCmsContent";

const MembershipTeaser = () => {
  const { t } = useTranslation();
  const cms = useCmsSection("home", "membership-teaser");

  const tag = (cms?.tag as string) || t("membership.tag");
  const headline = (cms?.headline as string) || t("membership.headline");
  const body = (cms?.body as string) || t("membership.body");

  const plans = [
    {
      name: (cms?.plans?.[0]?.name as string) || t("membership.essentials"),
      price: (cms?.plans?.[0]?.price as string) || "89",
      ideal: (cms?.plans?.[0]?.ideal as string) || t("membership.essentialsIdeal"),
      features: (cms?.plans?.[0]?.features as string[]) || (t("membershipPlans.essentialsFeaturesShort", { returnObjects: true }) as string[]),
      cta: (cms?.plans?.[0]?.cta as string) || t("membership.startEssentials"),
      featured: false,
    },
    {
      name: (cms?.plans?.[1]?.name as string) || t("membership.plus"),
      price: (cms?.plans?.[1]?.price as string) || "139",
      ideal: (cms?.plans?.[1]?.ideal as string) || t("membership.plusIdeal"),
      features: (cms?.plans?.[1]?.features as string[]) || (t("membershipPlans.plusFeaturesShort", { returnObjects: true }) as string[]),
      cta: (cms?.plans?.[1]?.cta as string) || t("membership.joinPlus"),
      featured: true,
    },
    {
      name: (cms?.plans?.[2]?.name as string) || t("membership.signature"),
      price: (cms?.plans?.[2]?.price as string) || "199",
      ideal: (cms?.plans?.[2]?.ideal as string) || t("membership.signatureIdeal"),
      features: (cms?.plans?.[2]?.features as string[]) || (t("membershipPlans.signatureFeaturesShort", { returnObjects: true }) as string[]),
      cta: (cms?.plans?.[2]?.cta as string) || t("membership.goSignature"),
      featured: false,
    },
  ];

  return (
    <Section>
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="pill-tag mb-6 inline-block">{tag}</span>
        <h2 className="text-editorial-lg text-foreground">{headline}</h2>
        <p className="text-body-lg mt-4">{body}</p>
      </div>

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
            <h3 className="font-serif text-2xl text-foreground">{plan.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{plan.ideal}</p>
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
            <Link to="/memberships" className="mt-8">
              <Button variant={plan.featured ? "hero" : "hero-outline"} size="lg" className="w-full">{plan.cta}</Button>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link to="/schedule" className="text-sm text-primary hover:underline underline-offset-4">{t("membership.trialLink")}</Link>
      </div>
    </Section>
  );
};

export default MembershipTeaser;
