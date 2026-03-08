import Layout from "@/components/layout/Layout";
import Section from "@/components/layout/Section";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import hiitImg from "@/assets/hiit-training.jpg";
import pilatesImg from "@/assets/pilates-studio.jpg";
import runningImg from "@/assets/running-club.jpg";
import openGymImg from "@/assets/open-gym.jpg";

const classTypes = [
  {
    name: "HIIT & Performance",
    description: "High-intensity interval training designed to build cardiovascular endurance, explosive power, and mental resilience. Every session is coach-led, structured, and scalable to your level.",
    intensity: "High",
    duration: "45 min",
    idealFor: "Athletes, fitness enthusiasts, and anyone seeking measurable performance gains",
    benefits: ["Burn efficiently", "Build power", "Improve VO2 max", "Mental toughness"],
    coaches: "Marco Delgado, Andrés Ruiz",
    image: hiitImg,
    tags: ["Coach-led", "Small group", "Performance-focused"],
    category: "performance",
  },
  {
    name: "Strength & Conditioning",
    description: "Structured strength sessions focused on compound movements, progressive overload, and functional training. Build a foundation that supports every other discipline.",
    intensity: "Medium–High",
    duration: "50 min",
    idealFor: "Anyone wanting to get stronger, leaner, and more resilient",
    benefits: ["Build lean muscle", "Improve posture", "Boost metabolism", "Prevent injury"],
    coaches: "Marco Delgado",
    image: openGymImg,
    tags: ["Coach-led", "Progressive", "All levels"],
    category: "performance",
  },
  {
    name: "HYROX Training",
    description: "Race-specific preparation combining running intervals, functional movements, and competition simulation. Whether your first race or your best time, this is where you prepare.",
    intensity: "High",
    duration: "60 min",
    idealFor: "HYROX athletes, competitive fitness enthusiasts, and endurance seekers",
    benefits: ["Race preparation", "Functional endurance", "Mental grit", "Community accountability"],
    coaches: "Marco Delgado, Andrés Ruiz",
    image: hiitImg,
    tags: ["Competition-ready", "Coach-led", "Race prep"],
    category: "performance",
  },
  {
    name: "Pilates",
    description: "Classical and contemporary Pilates focusing on core strength, spinal mobility, and body awareness. Reformer and mat options available in our dedicated studio.",
    intensity: "Low–Medium",
    duration: "50 min",
    idealFor: "Anyone seeking posture improvement, flexibility, and mindful movement",
    benefits: ["Core stability", "Flexibility", "Body awareness", "Stress relief"],
    coaches: "Laura Vega",
    image: pilatesImg,
    tags: ["Mind-body", "Small group", "All levels"],
    category: "mindBody",
  },
  {
    name: "Hot Pilates",
    description: "Pilates performed in a heated studio for deeper stretching, increased calorie burn, and enhanced detoxification. A challenging yet restorative experience.",
    intensity: "Medium",
    duration: "45 min",
    idealFor: "Pilates practitioners seeking an elevated challenge, heat therapy lovers",
    benefits: ["Deep flexibility", "Detoxification", "Core engagement", "Recovery support"],
    coaches: "Laura Vega",
    image: pilatesImg,
    tags: ["Heated studio", "Mind-body", "Recovery-friendly"],
    category: "mindBody",
  },
  {
    name: "Running Club",
    description: "Coached running sessions through Madrid's most beautiful routes. Interval training, tempo runs, and long-distance preparation in a supportive group environment.",
    intensity: "Medium–High",
    duration: "60 min",
    idealFor: "Runners of all levels, from 5K beginners to marathon veterans",
    benefits: ["Improve pace", "Build endurance", "Community", "Explore Madrid"],
    coaches: "Andrés Ruiz",
    image: runningImg,
    tags: ["Community energy", "Outdoor", "All paces"],
    category: "endurance",
  },
  {
    name: "Mobility & Recovery",
    description: "Guided sessions focused on joint mobility, fascial release, and nervous system regulation. The essential counterbalance to high-performance training.",
    intensity: "Low",
    duration: "40 min",
    idealFor: "Active recovery days, injury prevention, stressed professionals",
    benefits: ["Reduce tension", "Prevent injury", "Improve range of motion", "Nervous system reset"],
    coaches: "Laura Vega",
    image: pilatesImg,
    tags: ["Recovery-first", "Beginner-friendly", "Restorative"],
    category: "recovery",
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Performance", value: "performance" },
  { label: "Mind & Body", value: "mindBody" },
  { label: "Endurance", value: "endurance" },
  { label: "Recovery", value: "recovery" },
];

const Classes = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all" ? classTypes : classTypes.filter((c) => c.category === activeFilter);

  return (
    <Layout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="section-container text-center max-w-3xl mx-auto">
          <span className="pill-tag mb-6 inline-block">Training</span>
          <h1 className="text-editorial-xl text-foreground">
            Every session,<br />intentionally designed.
          </h1>
          <p className="text-body-lg mt-6">
            From competitive HYROX prep to meditative Pilates — every class at Pomona is crafted for measurable progress, personal attention, and genuine enjoyment.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="section-container mb-12">
        <div className="flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`pill-tag cursor-pointer transition-all duration-300 ${
                activeFilter === f.value
                  ? "bg-primary/10 border-primary/40 text-primary"
                  : "hover:border-foreground/20"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Class Cards */}
      <Section>
        <div className="flex flex-col gap-8">
          {filtered.map((cls) => (
            <div key={cls.name} className="card-premium overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2 relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={cls.image}
                    alt={cls.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {cls.tags.map((tag) => (
                      <span key={tag} className="pill-tag text-[10px] bg-background/50 backdrop-blur-sm border-foreground/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col">
                  <h2 className="font-serif text-2xl text-foreground">{cls.name}</h2>
                  <p className="text-body mt-3">{cls.description}</p>

                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div>
                      <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">Intensity</div>
                      <div className="text-sm font-medium text-foreground">{cls.intensity}</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">Duration</div>
                      <div className="text-sm font-medium text-foreground">{cls.duration}</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">Coach</div>
                      <div className="text-sm font-medium text-foreground">{cls.coaches}</div>
                    </div>
                  </div>

                  <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-3">
                    <Link to="/schedule">
                      <Button variant="hero" size="default">Book This Class</Button>
                    </Link>
                    <Link to="/schedule">
                      <Button variant="hero-outline" size="default">View Schedule</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Classes;
