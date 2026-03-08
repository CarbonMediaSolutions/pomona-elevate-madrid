import Section from "@/components/layout/Section";
import { Dumbbell, Heart, Coffee, Users } from "lucide-react";

const pillars = [
  { icon: Dumbbell, label: "Train", desc: "Expert-led sessions in strength, HIIT, Pilates, and HYROX." },
  { icon: Heart, label: "Recover", desc: "Sauna, infrared, physiotherapy, and restorative movement." },
  { icon: Coffee, label: "Refuel", desc: "Smoothies, coffee, and nourishing meals at our healthy bar." },
  { icon: Users, label: "Connect", desc: "A community built around shared ambition and daily ritual." },
];

const BrandPositioning = () => {
  return (
    <Section>
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="pill-tag mb-6 inline-block">The Pomona Way</span>
        <h2 className="text-editorial-lg text-foreground">
          More than a gym.<br />A daily ritual.
        </h2>
        <p className="text-body-lg mt-6">
          Pomona Club blends training, recovery, and nourishing food into one elevated experience. 
          Move harder, recover better, and stay longer in a space designed for performance and connection.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {pillars.map((pillar) => (
          <div key={pillar.label} className="card-premium p-8 text-center group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors duration-300">
              <pillar.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-serif text-lg font-medium text-foreground mb-3">{pillar.label}</h3>
            <p className="text-body text-sm">{pillar.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default BrandPositioning;
