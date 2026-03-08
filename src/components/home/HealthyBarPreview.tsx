import Section from "@/components/layout/Section";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import barImg from "@/assets/healthy-bar.jpg";

const HealthyBarPreview = () => {
  return (
    <Section className="bg-secondary/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
          <img
            src={barImg}
            alt="Pomona Club healthy bar with smoothies and coffee"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div>
          <span className="pill-tag mb-6 inline-block">Healthy Bar</span>
          <h2 className="text-editorial-lg text-foreground">
            Refuel without<br />leaving the club.
          </h2>
          <p className="text-body-lg mt-6">
            From cold-pressed juices to specialty coffee, protein bowls to functional elixirs — 
            our bar is where post-workout recovery meets the social energy of a premium café.
          </p>
          <p className="text-body mt-4">
            Designed for members who want to stay longer, eat better, and turn their training session into a complete daily ritual. 
            The healthy bar is open to both members and visitors.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {["Smoothies", "Specialty Coffee", "Protein Bowls", "Functional Drinks", "Healthy Snacks"].map((item) => (
              <span key={item} className="pill-tag">{item}</span>
            ))}
          </div>

          <Link to="/healthy-bar" className="mt-8 inline-block">
            <Button variant="hero-outline" size="lg">
              Explore the Menu
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default HealthyBarPreview;
