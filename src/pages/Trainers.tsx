import Layout from "@/components/layout/Layout";
import Section from "@/components/layout/Section";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

const allTrainers = [
  {
    name: "Marco Delgado",
    role: "Head of Strength & HYROX",
    expertise: "Strength & Conditioning, HYROX, Performance",
    certifications: "NSCA-CSCS, HYROX Pro Coach, CrossFit L3",
    philosophy: "Strength isn't just physical — it's the confidence to push beyond what you thought possible, and the discipline to recover properly.",
    classes: ["Strength & Conditioning", "HYROX Training", "HIIT"],
    quote: "The best programme is the one you enjoy enough to stay consistent with.",
    image: trainer1,
    discipline: "performance",
  },
  {
    name: "Laura Vega",
    role: "Pilates & Movement Director",
    expertise: "Pilates, Mobility, Rehabilitation, Breathwork",
    certifications: "BASI Pilates Comprehensive, PMA-CPT, FRC Specialist",
    philosophy: "Movement should feel intelligent. My job is to help you understand your body so deeply that every movement becomes intentional.",
    classes: ["Pilates", "Hot Pilates", "Mobility & Recovery"],
    quote: "Flexibility of the body begins with flexibility of the mind.",
    image: trainer2,
    discipline: "mindBody",
  },
  {
    name: "Andrés Ruiz",
    role: "HIIT & Running Coach",
    expertise: "HIIT, Running, Endurance, Conditioning",
    certifications: "ACE-CPT, Road Runners Club of America Coach, Precision Nutrition L1",
    philosophy: "Running and HIIT aren't just about going fast — they're about building a body and mind that thrive under pressure.",
    classes: ["HIIT & Performance", "Running Club", "HYROX Training"],
    quote: "Every finish line is just the start of a new beginning.",
    image: trainer3,
    discipline: "endurance",
  },
];

const filters = [
  { label: "All Coaches", value: "all" },
  { label: "Performance", value: "performance" },
  { label: "Mind & Body", value: "mindBody" },
  { label: "Endurance", value: "endurance" },
];

const Trainers = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const filtered = activeFilter === "all" ? allTrainers : allTrainers.filter((t) => t.discipline === activeFilter);

  return (
    <Layout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="section-container text-center max-w-3xl mx-auto">
          <span className="pill-tag mb-6 inline-block">Our Coaches</span>
          <h1 className="text-editorial-xl text-foreground">
            Expert-led.<br />Always personal.
          </h1>
          <p className="text-body-lg mt-6">
            Every coach at Pomona combines deep expertise with genuine care. Small groups. Personal attention. Real progress.
          </p>
        </div>
      </section>

      <div className="section-container mb-12">
        <div className="flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`pill-tag cursor-pointer transition-all duration-300 ${
                activeFilter === f.value ? "bg-primary/10 border-primary/40 text-primary" : "hover:border-foreground/20"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <Section>
        <div className="flex flex-col gap-8">
          {filtered.map((t) => (
            <div key={t.name} className="card-premium overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-4">
                <div className="lg:col-span-1 relative aspect-square lg:aspect-auto overflow-hidden">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="lg:col-span-3 p-6 lg:p-8">
                  <h2 className="font-serif text-2xl text-foreground">{t.name}</h2>
                  <p className="text-sm text-primary mt-1">{t.role}</p>

                  <blockquote className="font-serif italic text-foreground/70 mt-4 text-lg">
                    "{t.quote}"
                  </blockquote>

                  <p className="text-body mt-4">{t.philosophy}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                    <div>
                      <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">Expertise</div>
                      <div className="text-sm text-foreground">{t.expertise}</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">Certifications</div>
                      <div className="text-sm text-foreground">{t.certifications}</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">Classes</div>
                      <div className="text-sm text-foreground">{t.classes.join(", ")}</div>
                    </div>
                  </div>

                  <Link to="/schedule" className="mt-6 inline-block">
                    <Button variant="hero" size="default">Book with {t.name.split(" ")[0]}</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Trainers;
