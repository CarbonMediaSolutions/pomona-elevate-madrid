import Layout from "@/components/layout/Layout";
import Section from "@/components/layout/Section";
import PageHero from "@/components/layout/PageHero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import hiitImg from "@/assets/hiit-real.jpg";
import strengthImg from "@/assets/strength-real.jpg";
import hyroxImg from "@/assets/hyrox-real.jpg";
import pilatesImg from "@/assets/pilates-real.jpg";
import runningImg from "@/assets/running-real.jpg";
import absImg from "@/assets/abs-real.jpg";
import personalImg from "@/assets/personal-real.jpg";
import { useTranslation } from "react-i18next";
import { useCmsSection } from "@/hooks/useCmsContent";

const classTypes = [
  { name: "HIIT & Performance", description: "High-intensity interval training designed to build cardiovascular endurance, explosive power, and mental resilience. Every session is coach-led, structured, and scalable to your level.", intensity: "High", duration: "45 min", idealFor: "Athletes, fitness enthusiasts, and anyone seeking measurable performance gains", benefits: ["Burn efficiently", "Build power", "Improve VO2 max", "Mental toughness"], coaches: "Marco Delgado, Andrés Ruiz", image: hiitImg, tags: ["Coach-led", "Small group", "Performance-focused"], category: "performance" },
  { name: "Strength & Conditioning", description: "Structured strength sessions focused on compound movements, progressive overload, and functional training. Build a foundation that supports every other discipline.", intensity: "Medium–High", duration: "50 min", idealFor: "Anyone wanting to get stronger, leaner, and more resilient", benefits: ["Build lean muscle", "Improve posture", "Boost metabolism", "Prevent injury"], coaches: "Marco Delgado", image: strengthImg, tags: ["Coach-led", "Progressive", "All levels"], category: "performance" },
  { name: "HYROX Training", description: "Race-specific preparation combining running intervals, functional movements, and competition simulation.", intensity: "High", duration: "60 min", idealFor: "HYROX athletes, competitive fitness enthusiasts", benefits: ["Race preparation", "Functional endurance", "Mental grit", "Community accountability"], coaches: "Marco Delgado, Andrés Ruiz", image: hyroxImg, tags: ["Competition-ready", "Coach-led", "Race prep"], category: "performance" },
  { name: "Personal Training", description: "One-on-one coaching tailored to your goals — strength, body composition, flexibility, and athletic performance. Your coach designs every session around you.", intensity: "Custom", duration: "60 min", idealFor: "Anyone seeking personalised coaching and accelerated results", benefits: ["Bespoke programming", "Faster results", "Injury prevention", "Accountability"], coaches: "All certified coaches", image: personalImg, tags: ["1-on-1", "Goal-oriented", "All levels"], category: "performance" },
  { name: "Pilates", description: "Classical and contemporary Pilates focusing on core strength, spinal mobility, and body awareness. Reformer and mat options available.", intensity: "Low–Medium", duration: "50 min", idealFor: "Anyone seeking posture improvement, flexibility, and mindful movement", benefits: ["Core stability", "Flexibility", "Body awareness", "Stress relief"], coaches: "Laura Vega", image: pilatesImg, tags: ["Mind-body", "Small group", "All levels"], category: "mindBody" },
  { name: "Hot Pilates", description: "Pilates performed in a heated studio for deeper stretching, increased calorie burn, and enhanced detoxification.", intensity: "Medium", duration: "45 min", idealFor: "Pilates practitioners seeking an elevated challenge", benefits: ["Deep flexibility", "Detoxification", "Core engagement", "Recovery support"], coaches: "Laura Vega", image: pilatesImg, tags: ["Heated studio", "Mind-body", "Recovery-friendly"], category: "mindBody" },
  { name: "Abs & Stretching", description: "Targeted core and flexibility work combining abdominal strengthening with guided stretching to improve mobility and body awareness.", intensity: "Low–Medium", duration: "40 min", idealFor: "All levels — perfect complement to high-intensity training days", benefits: ["Core strength", "Improved flexibility", "Injury prevention", "Active recovery"], coaches: "Laura Vega", image: absImg, tags: ["Core-focused", "Beginner-friendly", "Recovery-friendly"], category: "mindBody" },
  { name: "Running Club", description: "Coached running sessions through Madrid's most beautiful routes. Interval training, tempo runs, and long-distance preparation.", intensity: "Medium–High", duration: "60 min", idealFor: "Runners of all levels", benefits: ["Improve pace", "Build endurance", "Community", "Explore Madrid"], coaches: "Andrés Ruiz", image: runningImg, tags: ["Community energy", "Outdoor", "All paces"], category: "endurance" },
  { name: "Mobility & Recovery", description: "Guided sessions focused on joint mobility, fascial release, and nervous system regulation.", intensity: "Low", duration: "40 min", idealFor: "Active recovery days, injury prevention", benefits: ["Reduce tension", "Prevent injury", "Improve range of motion", "Nervous system reset"], coaches: "Laura Vega", image: absImg, tags: ["Recovery-first", "Beginner-friendly", "Restorative"], category: "recovery" },
];

const Classes = () => {
  const { t } = useTranslation();
  const cmsHero = useCmsSection("classes", "hero");
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { label: t("classesPage.all"), value: "all" },
    { label: t("classesPage.performance"), value: "performance" },
    { label: t("classesPage.mindBody"), value: "mindBody" },
    { label: t("classesPage.endurance"), value: "endurance" },
    { label: t("classesPage.recovery"), value: "recovery" },
  ];

  const filtered = activeFilter === "all" ? classTypes : classTypes.filter((c) => c.category === activeFilter);

  return (
    <Layout>
      <PageHero
        image={hiitImg}
        tag={(cmsHero?.tag as string) || t("classesPage.tag")}
        headline={(cmsHero?.headline as string) || t("classesPage.headline")}
        body={(cmsHero?.body as string) || t("classesPage.body")}
      />

      <div className="section-container my-12">
        <div className="flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button key={f.value} onClick={() => setActiveFilter(f.value)} className={`pill-tag cursor-pointer transition-all duration-300 ${activeFilter === f.value ? "bg-primary/10 border-primary/40 text-primary" : "hover:border-foreground/20"}`}>{f.label}</button>
          ))}
        </div>
      </div>

      <Section>
        <div className="flex flex-col gap-8">
          {filtered.map((cls) => (
            <div key={cls.name} className="card-premium overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2 relative h-64 lg:h-auto overflow-hidden">
                  <img src={cls.image} alt={cls.name} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {cls.tags.map((ctag) => (<span key={ctag} className="pill-tag text-[10px] bg-background/50 backdrop-blur-sm border-foreground/10">{ctag}</span>))}
                  </div>
                </div>
                <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col">
                  <h2 className="font-serif text-2xl text-foreground">{cls.name}</h2>
                  <p className="text-body mt-3">{cls.description}</p>
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div>
                      <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">{t("classesPage.intensity")}</div>
                      <div className="text-sm font-medium text-foreground">{cls.intensity}</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">{t("classesPage.duration")}</div>
                      <div className="text-sm font-medium text-foreground">{cls.duration}</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">{t("classesPage.coach")}</div>
                      <div className="text-sm font-medium text-foreground">{cls.coaches}</div>
                    </div>
                  </div>
                  <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-3">
                    <Link to="/schedule"><Button variant="hero" size="default">{t("classesPage.bookClass")}</Button></Link>
                    <Link to="/schedule"><Button variant="hero-outline" size="default">{t("classesPage.viewSchedule")}</Button></Link>
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
