import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import PageHero from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface SectionData {
  section_type: string;
  section_key: string;
  content: Record<string, any>;
}

export default function SectionRenderer({ section }: { section: SectionData }) {
  const c = section.content;

  switch (section.section_type) {
    case "hero":
      return (
        <PageHero
          image={c.image || "/placeholder.svg"}
          tag={c.tag || ""}
          headline={c.headline || ""}
          body={c.body}
        />
      );

    case "text-image":
      return (
        <Section>
          <div className={`grid md:grid-cols-2 gap-12 items-center`}>
            <div className={c.imagePosition === "left" ? "md:order-2" : ""}>
              <h2 className="font-serif text-editorial-lg mb-4 text-foreground">{c.heading}</h2>
              <p className="text-body-lg whitespace-pre-line">{c.body}</p>
            </div>
            <div className={c.imagePosition === "left" ? "md:order-1" : ""}>
              {c.image ? (
                <img
                  src={c.image}
                  alt={c.heading || ""}
                  className="w-full aspect-[4/3] object-cover rounded-lg"
                />
              ) : (
                <div className="w-full aspect-[4/3] bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm">
                  Image placeholder
                </div>
              )}
            </div>
          </div>
        </Section>
      );

    case "cards-grid":
      return (
        <Section>
          {c.heading && <h2 className="font-serif text-editorial-lg mb-8 text-center">{c.heading}</h2>}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(c.cards || []).map((card: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-premium p-6"
              >
                {card.image && (
                  <img src={card.image} alt={card.title || ""} className="w-full aspect-video object-cover rounded mb-4" />
                )}
                <h3 className="font-serif text-lg mb-2 text-foreground">{card.title}</h3>
                <p className="text-sm text-muted-foreground/80">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </Section>
      );

    case "cta-banner":
      return (
        <section className="py-20 px-6 bg-secondary">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-editorial-lg mb-4 text-foreground">{c.headline}</h2>
            {c.body && <p className="text-body-lg mb-8">{c.body}</p>}
            <div className="flex flex-wrap justify-center gap-4">
              {c.cta1Text && (
                <Button asChild size="lg">
                  <Link to={c.cta1Link || "#"}>{c.cta1Text}</Link>
                </Button>
              )}
              {c.cta2Text && (
                <Button asChild variant="outline" size="lg">
                  <Link to={c.cta2Link || "#"}>{c.cta2Text}</Link>
                </Button>
              )}
            </div>
          </div>
        </section>
      );

    case "testimonials":
      return (
        <Section>
          {c.heading && <h2 className="font-serif text-editorial-lg mb-8 text-center">{c.heading}</h2>}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(c.items || []).map((item: any, i: number) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-premium p-6"
              >
                <p className="text-foreground italic mb-4 leading-relaxed">"{item.quote}"</p>
                <footer className="text-sm">
                  <span className="font-semibold gradient-text">{item.author}</span>
                  {item.role && <span className="text-muted-foreground/80"> — {item.role}</span>}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </Section>
      );

    case "gallery":
      return (
        <Section>
          {c.heading && <h2 className="font-serif text-editorial-lg mb-8 text-center">{c.heading}</h2>}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {(c.images || []).map((img: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                {img.url ? (
                  <img src={img.url} alt={img.alt || ""} className="w-full aspect-square object-cover rounded-lg" />
                ) : (
                  <div className="w-full aspect-square bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-xs">
                    {img.alt || "Image"}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </Section>
      );

    case "embed":
      return (
        <Section>
          {c.heading && <h2 className="font-serif text-editorial-lg mb-6 text-center">{c.heading}</h2>}
          <div className="card-premium overflow-hidden">
            <iframe
              src={c.src || "about:blank"}
              width="100%"
              height={c.height || 600}
              className="border-0"
              title={c.heading || "Embedded content"}
              loading="lazy"
            />
          </div>
        </Section>
      );

    default:
      return null;
  }
}
