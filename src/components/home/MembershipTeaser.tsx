import Section from "@/components/layout/Section";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const MembershipTeaser = () => {
  const { t } = useTranslation();

  const plans = [
    {
      name: t("membership.essentials"),
      price: "89",
      ideal: t("membership.essentialsIdeal"),
      features: t("membershipPlans.essentialsFeaturesShort", { returnObjects: true }) as string[],
      cta: t("membership.startEssentials"),
      featured: false,
    },
    {
      name: t("membership.plus"),
      price: "139",
      ideal: t("membership.plusIdeal"),
      features: t("membershipPlans.plusFeaturesShort", { returnObjects: true }) as string[],
      cta: t("membership.joinPlus"),
      featured: true,
    },
    {
      name: t("membership.signature"),
      price: "199",
      ideal: t("membership.signatureIdeal"),
      features: t("membershipPlans.signatureFeaturesShort", { returnObjects: true }) as string[],
      cta: t("membership.goSignature"),
      featured: false,
    },
  ];

  return (
    <Section>
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="pill-tag mb-6 inline-block">{t("membership.tag")}</span>
        <h2 className="text-editorial-lg text-foreground">{t("membership.headline")}</h2>
        <p className="text-body-lg mt-4">{t("membership.body")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`card-premium p-8 flex flex-col transition-all duration-500 ${
              plan.featured ? "border-primary/40 ring-1 ring-primary/20 relative overflow-visible" : ""
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
            <h3 className="font-serif text-2xl text-foreground">{plan.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{plan.ideal}</p>
            <div className="mt-6 mb-6">
              <span className="text-4xl font-serif font-semibold text-foreground">€{plan.price}</span>
              <span className="text-sm text-muted-foreground">{t("membership.month")}</span>
            </div>
            <ul className="flex flex-col gap-3 flex-1">
              {Array.isArray(plan.features) && plan.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-secondary-foreground">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {f}
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
