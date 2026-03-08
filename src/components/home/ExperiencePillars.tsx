import Section from "@/components/layout/Section";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-gym.jpg";
import recoveryImg from "@/assets/recovery-room.jpg";
import barImg from "@/assets/healthy-bar.jpg";
import hiitImg from "@/assets/hiit-training.jpg";

const pillars = [
  {
    title: "Train with intent",
    desc: "From high-intensity sessions to mindful Pilates, every class is designed to challenge, refine, and reward. Small groups. Expert coaches. Measurable progress.",
    image: hiitImg,
    link: "/classes",
    tags: ["Coach-led", "Small group"],
  },
  {
    title: "Recover like an athlete",
    desc: "Infrared sauna, physiotherapy, mobility sessions, and guided recovery protocols. Because what you do after training defines what you do next.",
    image: recoveryImg,
    link: "/recovery",
    tags: ["Recovery-first", "Science-backed"],
  },
  {
    title: "Refuel beautifully",
    desc: "Smoothies, specialty coffee, protein bowls, and functional drinks crafted for performance and pleasure. Stay longer. Eat better.",
    image: barImg,
    link: "/healthy-bar",
    tags: ["Post-workout", "Social"],
  },
  {
    title: "Belong to the club",
    desc: "More than members — a community of ambitious, health-conscious people who share values, energy, and a space worth returning to every day.",
    image: heroImg,
    link: "/about",
    tags: ["Community energy", "Lifestyle"],
  },
];

const ExperiencePillars = () => {
  return (
    <Section className="bg-secondary/30">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="pill-tag mb-6 inline-block">The Experience</span>
        <h2 className="text-editorial-lg text-foreground">
          Four pillars. One elevated routine.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.map((p) => (
          <Link to={p.link} key={p.title} className="card-premium group overflow-hidden">
            <div className="relative h-64 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              <div className="absolute bottom-4 left-4 flex gap-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="pill-tag text-[10px] bg-background/50 backdrop-blur-sm border-foreground/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 lg:p-8">
              <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-3">{p.title}</h3>
              <p className="text-body text-sm">{p.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
};

export default ExperiencePillars;
