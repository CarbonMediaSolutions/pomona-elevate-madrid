import Layout from "@/components/layout/Layout";
import Section from "@/components/layout/Section";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-gym.jpg";

const About = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="section-container text-center max-w-3xl mx-auto">
          <span className="pill-tag mb-6 inline-block">About</span>
          <h1 className="text-editorial-xl text-foreground">
            A club designed around<br />how modern wellness<br />actually works.
          </h1>
        </div>
      </section>

      <div className="section-container mb-16">
        <div className="relative rounded-lg overflow-hidden aspect-[21/9]">
          <img src={heroImg} alt="Pomona Club interior" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>

      <Section>
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h2 className="text-editorial-md text-foreground">Why Pomona exists</h2>
            <p className="text-body-lg mt-4">
              Pomona Club was founded on a simple observation: the best version of fitness isn't just about the workout. It's about what happens around it — the recovery, the food, the people, and the space itself.
            </p>
            <p className="text-body mt-4">
              We created Pomona to be the place where ambitious, health-conscious people in Madrid can train with intention, recover with purpose, refuel beautifully, and belong to something worth coming back to every day.
            </p>
          </div>

          <div className="divider-elegant !mx-0" />

          <div>
            <h2 className="text-editorial-md text-foreground">What makes us different</h2>
            <p className="text-body-lg mt-4">
              Most gyms focus on the workout. We designed Pomona around the entire day. Boutique class quality combined with open gym freedom. A recovery suite that rivals standalone wellness centres. A healthy bar that's a destination in itself. And a community of people who share your values.
            </p>
          </div>

          <div className="divider-elegant !mx-0" />

          <div>
            <h2 className="text-editorial-md text-foreground">The space</h2>
            <p className="text-body-lg mt-4">
              Every material, every light fixture, every corner of Pomona was designed to feel premium without being pretentious. Warm natural materials, considered acoustics, and an atmosphere that motivates during training and calms during recovery.
            </p>
            <p className="text-body mt-4">
              Located on Calle de Serrano in the Salamanca district, Pomona sits at the crossroads of Madrid's most dynamic neighbourhood — between work, home, and the life you're building.
            </p>
          </div>

          <div className="divider-elegant !mx-0" />

          <div>
            <h2 className="text-editorial-md text-foreground">Our values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              {[
                { title: "Intention over intensity", desc: "Smart training, not just hard training." },
                { title: "Recovery is performance", desc: "What you do after matters as much as what you do during." },
                { title: "Nourishment, not restriction", desc: "Fuel your body with food that tastes as good as it performs." },
                { title: "Community over competition", desc: "Progress together, celebrate together, belong together." },
              ].map((v) => (
                <div key={v.title} className="card-premium p-6">
                  <h3 className="font-serif text-lg text-foreground">{v.title}</h3>
                  <p className="text-body text-sm mt-2">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/30">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-editorial-md text-foreground">Ready to experience Pomona?</h2>
          <p className="text-body-lg mt-4">
            Book a trial session and see the club for yourself. No commitment. Just better movement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/schedule"><Button variant="hero" size="lg">Book a Trial</Button></Link>
            <Link to="/contact"><Button variant="hero-outline" size="lg">Plan Your Visit</Button></Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default About;
