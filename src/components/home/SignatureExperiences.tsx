import Section from "@/components/layout/Section";
import { Link } from "react-router-dom";
import hiitImg from "@/assets/hiit-training.jpg";
import pilatesImg from "@/assets/pilates-studio.jpg";
import runningImg from "@/assets/running-club.jpg";
import openGymImg from "@/assets/open-gym.jpg";
import recoveryImg from "@/assets/recovery-room.jpg";
import barImg from "@/assets/healthy-bar.jpg";

const experiences = [
  { title: "HIIT & Performance", tag: "Performance-focused", image: hiitImg, href: "/classes" },
  { title: "HYROX Training", tag: "Competition-ready", image: openGymImg, href: "/classes" },
  { title: "Pilates & Hot Pilates", tag: "Mind-body", image: pilatesImg, href: "/classes" },
  { title: "Running Club", tag: "Community energy", image: runningImg, href: "/classes" },
  { title: "Open Gym", tag: "Train your way", image: openGymImg, href: "/classes" },
  { title: "Recovery Suite", tag: "Recovery-first", image: recoveryImg, href: "/recovery" },
  { title: "Nutrition & Physio", tag: "Expert support", image: barImg, href: "/recovery" },
  { title: "Healthy Bar", tag: "Refuel beautifully", image: barImg, href: "/healthy-bar" },
];

const SignatureExperiences = () => {
  return (
    <Section>
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="pill-tag mb-6 inline-block">Signature Experiences</span>
        <h2 className="text-editorial-lg text-foreground">
          Every session, intentionally designed.
        </h2>
        <p className="text-body-lg mt-4">
          From competitive HYROX prep to meditative Pilates, every offering at Pomona is crafted to elevate how you move, recover, and feel.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {experiences.map((exp) => (
          <Link
            key={exp.title}
            to={exp.href}
            className="group relative overflow-hidden rounded-lg aspect-[3/4] card-premium"
          >
            <img
              src={exp.image}
              alt={exp.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
              <span className="pill-tag text-[10px] mb-2 bg-background/30 backdrop-blur-sm border-foreground/10">
                {exp.tag}
              </span>
              <h3 className="font-serif text-base lg:text-lg text-foreground mt-2">{exp.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
};

export default SignatureExperiences;
