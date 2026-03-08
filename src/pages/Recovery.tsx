import Layout from "@/components/layout/Layout";
import Section from "@/components/layout/Section";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import recoveryImg from "@/assets/recovery-room.jpg";
import pilatesImg from "@/assets/pilates-studio.jpg";

const services = [
  {
    name: "Infrared Sauna",
    desc: "Deep tissue heat therapy that promotes muscle recovery, detoxification, and improved circulation. Sessions available individually or as part of your membership.",
    benefit: "Reduces inflammation, improves sleep, accelerates recovery",
    duration: "30 min",
  },
  {
    name: "Traditional Sauna",
    desc: "Classic Finnish sauna experience for relaxation, cardiovascular health, and post-workout recovery. Available daily for all members.",
    benefit: "Stress reduction, muscle relaxation, immune support",
    duration: "20–30 min",
  },
  {
    name: "Physiotherapy",
    desc: "One-on-one sessions with licensed physiotherapists specializing in sports rehabilitation, injury prevention, and movement optimization.",
    benefit: "Injury recovery, movement assessment, pain management",
    duration: "45–60 min",
  },
  {
    name: "Mobility & Restoration",
    desc: "Guided sessions combining fascial release, joint mobilization, and breathwork. The essential complement to high-performance training.",
    benefit: "Flexibility, nervous system reset, injury prevention",
    duration: "40 min",
  },
  {
    name: "Nutrition Guidance",
    desc: "Personalized nutrition consultations with our performance nutritionist. Meal planning, supplementation, and lifestyle integration for your goals.",
    benefit: "Optimized performance, body composition, energy",
    duration: "60 min consult",
  },
];

const Recovery = () => {
  return (
    <Layout>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="section-container text-center max-w-3xl mx-auto">
          <span className="pill-tag mb-6 inline-block">Recovery & Wellness</span>
          <h1 className="text-editorial-xl text-foreground">
            Recovery is part<br />of performance.
          </h1>
          <p className="text-body-lg mt-6">
            At Pomona, we believe what you do between sessions matters as much as the session itself. Our recovery suite combines science, warmth, and expert care.
          </p>
        </div>
      </section>

      {/* Hero image */}
      <div className="section-container mb-16">
        <div className="relative rounded-lg overflow-hidden aspect-[21/9]">
          <img src={recoveryImg} alt="Pomona Club recovery suite" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
          <div className="absolute bottom-8 left-8 max-w-md">
            <h2 className="font-serif text-2xl text-foreground">The Recovery Suite</h2>
            <p className="text-sm text-foreground/70 mt-2">Sauna, infrared, physiotherapy, and restorative movement — all under one roof.</p>
          </div>
        </div>
      </div>

      {/* Services */}
      <Section>
        <div className="flex flex-col gap-6">
          {services.map((s) => (
            <div key={s.name} className="card-premium p-6 lg:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-1">
                  <h3 className="font-serif text-xl text-foreground">{s.name}</h3>
                  <p className="text-body mt-2">{s.desc}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 shrink-0">
                  <div>
                    <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">Benefit</div>
                    <div className="text-sm text-foreground">{s.benefit}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">Duration</div>
                    <div className="text-sm text-foreground">{s.duration}</div>
                  </div>
                  <Link to="/schedule">
                    <Button variant="hero-outline" size="sm">Book</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-secondary/30">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-editorial-md text-foreground">Recovery, built into your membership.</h2>
          <p className="text-body-lg mt-4">
            Club Plus and Signature members enjoy included recovery suite access. Physiotherapy and nutrition are available as add-ons or included at higher tiers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/memberships"><Button variant="hero" size="lg">View Memberships</Button></Link>
            <Link to="/schedule"><Button variant="hero-outline" size="lg">Book a Session</Button></Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Recovery;
