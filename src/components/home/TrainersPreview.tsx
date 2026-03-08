import Section from "@/components/layout/Section";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

const trainers = [
  {
    name: "Marco Delgado",
    role: "Head of Strength & HYROX",
    specialty: "Strength, HYROX, Performance",
    image: trainer1,
  },
  {
    name: "Laura Vega",
    role: "Pilates & Movement Director",
    specialty: "Pilates, Mobility, Recovery",
    image: trainer2,
  },
  {
    name: "Andrés Ruiz",
    role: "HIIT & Running Coach",
    specialty: "HIIT, Running, Conditioning",
    image: trainer3,
  },
];

const TrainersPreview = () => {
  return (
    <Section>
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="pill-tag mb-6 inline-block">Our Coaches</span>
        <h2 className="text-editorial-lg text-foreground">
          Expert-led. Always personal.
        </h2>
        <p className="text-body-lg mt-4">
          Every session at Pomona is guided by coaches who combine deep expertise, genuine attention, and a shared commitment to your progress.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trainers.map((t) => (
          <div key={t.name} className="card-premium group overflow-hidden">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={t.image}
                alt={`${t.name} — ${t.role} at Pomona Club`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl text-foreground">{t.name}</h3>
              <p className="text-sm text-primary mt-1">{t.role}</p>
              <p className="text-xs text-muted-foreground mt-2">{t.specialty}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/trainers">
          <Button variant="hero-outline" size="lg">
            Meet All Coaches
          </Button>
        </Link>
      </div>
    </Section>
  );
};

export default TrainersPreview;
