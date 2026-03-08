import Layout from "@/components/layout/Layout";
import Section from "@/components/layout/Section";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import barImg from "@/assets/healthy-bar.jpg";

const menuCategories = [
  {
    name: "Smoothies & Juices",
    items: [
      { name: "Green Recovery", desc: "Spinach, avocado, banana, coconut water, spirulina", tag: "Post-workout" },
      { name: "Berry Protein Blast", desc: "Mixed berries, whey protein, almond milk, chia seeds", tag: "High protein" },
      { name: "Golden Elixir", desc: "Turmeric, ginger, mango, oat milk, black pepper", tag: "Anti-inflammatory" },
      { name: "Cold-Pressed Orange", desc: "Freshly squeezed Valencia oranges", tag: "Vitamin C" },
    ],
  },
  {
    name: "Coffee & Drinks",
    items: [
      { name: "Specialty Espresso", desc: "Single-origin beans, prepared by trained baristas", tag: "Signature" },
      { name: "Matcha Latte", desc: "Ceremonial grade matcha with oat or almond milk", tag: "Energy" },
      { name: "Protein Coffee", desc: "Espresso blended with vanilla whey and cold milk", tag: "Pre-workout" },
      { name: "Kombucha", desc: "House-fermented, rotating seasonal flavours", tag: "Gut health" },
    ],
  },
  {
    name: "Bowls & Bites",
    items: [
      { name: "Açaí Power Bowl", desc: "Açaí, granola, banana, coconut, peanut butter", tag: "Energy" },
      { name: "Grilled Chicken Bowl", desc: "Brown rice, avocado, greens, tahini dressing", tag: "High protein" },
      { name: "Overnight Oats", desc: "Oats, Greek yogurt, seasonal fruit, honey", tag: "Pre-workout" },
      { name: "Energy Bites", desc: "Date, almond, cacao, and coconut", tag: "Snack" },
    ],
  },
];

const HealthyBar = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="section-container text-center max-w-3xl mx-auto">
          <span className="pill-tag mb-6 inline-block">Healthy Bar</span>
          <h1 className="text-editorial-xl text-foreground">
            Refuel without<br />leaving the club.
          </h1>
          <p className="text-body-lg mt-6">
            From cold-pressed juices to specialty coffee, protein bowls to functional elixirs — our bar is where post-workout recovery meets the social energy of a premium café.
          </p>
        </div>
      </section>

      {/* Hero image */}
      <div className="section-container mb-16">
        <div className="relative rounded-lg overflow-hidden aspect-[21/9]">
          <img src={barImg} alt="Pomona Club healthy bar" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>

      {/* Menu */}
      {menuCategories.map((cat) => (
        <Section key={cat.name}>
          <h2 className="text-editorial-md text-foreground mb-8">{cat.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cat.items.map((item) => (
              <div key={item.name} className="card-premium p-6 flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-serif text-lg text-foreground">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
                <span className="pill-tag text-[10px] shrink-0">{item.tag}</span>
              </div>
            ))}
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section className="bg-secondary/30">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-editorial-md text-foreground">Open to members and visitors.</h2>
          <p className="text-body-lg mt-4">
            The Pomona Bar welcomes everyone. Members enjoy exclusive pricing and perks. Drop in, stay longer, refuel beautifully.
          </p>
          <Link to="/contact" className="mt-8 inline-block">
            <Button variant="hero" size="lg">Plan Your Visit</Button>
          </Link>
        </div>
      </Section>
    </Layout>
  );
};

export default HealthyBar;
