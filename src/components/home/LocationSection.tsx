import Section from "@/components/layout/Section";
import { MapPin, Clock, Car } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const LocationSection = () => {
  const { t } = useTranslation();

  return (
    <Section className="bg-secondary/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="pill-tag mb-6 inline-block">{t("location.tag")}</span>
          <h2 className="text-editorial-lg text-foreground whitespace-pre-line">{t("location.headline")}</h2>
          <p className="text-body-lg mt-6">{t("location.body")}</p>

          <div className="flex flex-col gap-4 mt-8">
            <div className="flex items-start gap-3 text-secondary-foreground">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="font-medium text-foreground">Calle de Serrano 45, 28001 Madrid</div>
                <div className="text-sm text-muted-foreground">{t("location.salamanca")}</div>
              </div>
            </div>
            <div className="flex items-start gap-3 text-secondary-foreground">
              <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="font-medium text-foreground">{t("location.monFri")}</div>
                <div className="text-sm text-muted-foreground">{t("location.satSun")}</div>
              </div>
            </div>
            <div className="flex items-start gap-3 text-secondary-foreground">
              <Car className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="font-medium text-foreground">{t("location.metro")}</div>
                <div className="text-sm text-muted-foreground">{t("location.parking")}</div>
              </div>
            </div>
          </div>

          <Link to="/contact" className="mt-8 inline-block">
            <Button variant="hero" size="lg">{t("location.planVisit")}</Button>
          </Link>
        </div>

        <div className="relative rounded-lg overflow-hidden aspect-[4/3] bg-muted">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.3!2d-3.685!3d40.428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI1JzQxLjAiTiAzwrA0MScwNi4wIlc!5e0!3m2!1sen!2ses!4v1"
            width="100%" height="100%"
            style={{ border: 0, filter: "saturate(0.6) brightness(0.8) contrast(1.1)" }}
            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            title="Pomona Club location on map"
          />
        </div>
      </div>
    </Section>
  );
};

export default LocationSection;
