import Section from "@/components/layout/Section";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useCmsSection } from "@/hooks/useCmsContent";
import gymSerranoImg from "@/assets/gym-serrano.jpg";
import gymRetiroImg from "@/assets/gym-retiro.jpg";

const locations = [
  {
    key: "serrano",
    image: gymSerranoImg,
    href: "/schedule/serrano",
  },
  {
    key: "retiro",
    image: gymRetiroImg,
    href: "/schedule/retiro",
  },
];

const LocationSection = () => {
  const { t } = useTranslation();
  const cms = useCmsSection("home", "location");

  const tag = (cms?.tag as string) || t("locationChooser.sectionTag");
  const headline = (cms?.headline as string) || t("locationChooser.sectionHeadline");
  const body = (cms?.body as string) || t("locationChooser.sectionBody");

  return (
    <Section className="bg-secondary/30">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="pill-tag mb-6 inline-block">{tag}</span>
        <h2 className="text-editorial-lg text-foreground whitespace-pre-line">{headline}</h2>
        <p className="text-body-lg mt-6">{body}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {locations.map((loc) => (
          <Link
            key={loc.key}
            to={loc.href}
            className="group relative overflow-hidden rounded-xl aspect-[4/5] block"
          >
            <img
              src={loc.image}
              alt={t(`locationChooser.${loc.key}`)}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              width={800}
              height={1024}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="font-serif text-2xl text-white mb-1">
                {t(`locationChooser.${loc.key}`)}
              </h3>
              <div className="flex items-center gap-2 text-white/70 text-sm mb-1">
                <MapPin className="w-3.5 h-3.5" />
                {t(`locationChooser.${loc.key}Address`)}
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
                <Clock className="w-3.5 h-3.5" />
                {t(`locationChooser.${loc.key}Hours`)}
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:gap-3 transition-all">
                {t("locationChooser.bookHere")}
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/contact">
          <Button variant="outline" size="lg">{t("location.planVisit")}</Button>
        </Link>
      </div>
    </Section>
  );
};

export default LocationSection;
