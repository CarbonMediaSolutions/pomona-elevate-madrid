import Layout from "@/components/layout/Layout";
import Section from "@/components/layout/Section";
import PageHero from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Car, Phone, Mail } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";
import heroImg from "@/assets/hero-gym.jpg";
import { useCmsSection } from "@/hooks/useCmsContent";
import { useSiteSettings } from "@/hooks/usePageContent";

const Contact = () => {
  const { t } = useTranslation();
  const cmsHero = useCmsSection("contact", "hero");
  const { data: settings } = useSiteSettings();

  const interestOptions = t("contactPage.interestOptions", { returnObjects: true }) as string[];
  const firstVisitItems = t("contactPage.firstVisitItems", { returnObjects: true }) as string[];
  const faqs = t("contactFaqs", { returnObjects: true }) as { q: string; a: string }[];

  const phone = settings?.phone || "+34 910 123 456";
  const email = settings?.email || "hello@pomonaclub.com";
  const address = settings?.address || "Calle de Serrano 45, 28001 Madrid";

  return (
    <Layout>
      <PageHero
        image={heroImg}
        tag={(cmsHero?.tag as string) || t("contactPage.tag")}
        headline={(cmsHero?.headline as string) || t("contactPage.headline")}
        body={(cmsHero?.body as string) || t("contactPage.body")}
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-editorial-md text-foreground mb-8">{t("contactPage.getInTouch")}</h2>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <div className="font-medium text-foreground">{address}</div>
                  <div className="text-sm text-muted-foreground">{t("location.salamanca")}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <div className="font-medium text-foreground">{settings?.hours_weekday || t("location.monFri")}</div>
                  <div className="text-sm text-muted-foreground">{settings?.hours_weekend || t("location.satSun")}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <div className="font-medium text-foreground">{phone}</div>
                  <div className="text-sm text-muted-foreground">{t("footer.whatsappAvailable")}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div className="font-medium text-foreground">{email}</div>
              </div>
              <div className="flex items-start gap-4">
                <Car className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <div className="font-medium text-foreground">{t("location.metro")}</div>
                  <div className="text-sm text-muted-foreground">{t("location.parking")}</div>
                </div>
              </div>
            </div>
            <div className="mt-8 rounded-lg overflow-hidden aspect-video bg-muted">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.3!2d-3.685!3d40.428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI1JzQxLjAiTiAzwrA0MScwNi4wIlc!5e0!3m2!1sen!2ses!4v1" width="100%" height="100%" style={{ border: 0, filter: "saturate(0.6) brightness(0.8) contrast(1.1)" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Pomona Club map" />
            </div>
          </div>

          <div>
            <h2 className="text-editorial-md text-foreground mb-8">{t("contactPage.sendMessage")}</h2>
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">{t("contactPage.name")}</label>
                <input type="text" placeholder={t("contactPage.namePlaceholder")} className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">{t("contactPage.email")}</label>
                <input type="email" placeholder={t("contactPage.emailPlaceholder")} className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">{t("contactPage.interest")}</label>
                <select className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all">
                  {Array.isArray(interestOptions) && interestOptions.map((opt) => (<option key={opt}>{opt}</option>))}
                </select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">{t("contactPage.message")}</label>
                <textarea rows={4} placeholder={t("contactPage.messagePlaceholder")} className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all resize-none" />
              </div>
              <Button variant="hero" size="lg" type="submit">{t("contactPage.send")}</Button>
            </form>

            <div className="mt-10 card-premium p-6">
              <h3 className="font-serif text-lg text-foreground mb-3">{t("contactPage.firstVisitTitle")}</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                {Array.isArray(firstVisitItems) && firstVisitItems.map((item, i) => (<li key={i}>• {item}</li>))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/30">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-editorial-md text-foreground">{t("contactPage.faqHeadline")}</h2>
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

export default Contact;
