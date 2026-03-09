import Layout from "@/components/layout/Layout";
import Section from "@/components/layout/Section";
import PageHero from "@/components/layout/PageHero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import openGymImg from "@/assets/open-gym.jpg";

const schedule = [
  { time: "07:00", class: "HIIT & Performance", coach: "Andrés Ruiz", duration: "45 min", day: 0, spots: 3 },
  { time: "08:00", class: "Pilates", coach: "Laura Vega", duration: "50 min", day: 0, spots: 5 },
  { time: "09:30", class: "Strength & Conditioning", coach: "Marco Delgado", duration: "50 min", day: 0, spots: 2 },
  { time: "12:00", class: "Mobility & Recovery", coach: "Laura Vega", duration: "40 min", day: 0, spots: 8 },
  { time: "18:00", class: "HYROX Training", coach: "Marco Delgado", duration: "60 min", day: 0, spots: 1 },
  { time: "19:30", class: "Hot Pilates", coach: "Laura Vega", duration: "45 min", day: 0, spots: 4 },
  { time: "07:00", class: "Running Club", coach: "Andrés Ruiz", duration: "60 min", day: 1, spots: 10 },
  { time: "08:30", class: "Strength & Conditioning", coach: "Marco Delgado", duration: "50 min", day: 1, spots: 6 },
  { time: "10:00", class: "Pilates", coach: "Laura Vega", duration: "50 min", day: 1, spots: 7 },
  { time: "17:30", class: "HIIT & Performance", coach: "Andrés Ruiz", duration: "45 min", day: 1, spots: 0 },
  { time: "19:00", class: "HYROX Training", coach: "Marco Delgado", duration: "60 min", day: 1, spots: 3 },
  { time: "07:00", class: "HIIT & Performance", coach: "Andrés Ruiz", duration: "45 min", day: 2, spots: 5 },
  { time: "08:00", class: "Hot Pilates", coach: "Laura Vega", duration: "45 min", day: 2, spots: 2 },
  { time: "09:30", class: "Strength & Conditioning", coach: "Marco Delgado", duration: "50 min", day: 2, spots: 4 },
  { time: "18:00", class: "Running Club", coach: "Andrés Ruiz", duration: "60 min", day: 2, spots: 8 },
  { time: "19:30", class: "Pilates", coach: "Laura Vega", duration: "50 min", day: 2, spots: 6 },
  { time: "09:00", class: "HYROX Training", coach: "Marco Delgado", duration: "60 min", day: 5, spots: 5 },
  { time: "10:30", class: "Pilates", coach: "Laura Vega", duration: "50 min", day: 5, spots: 7 },
  { time: "12:00", class: "Running Club", coach: "Andrés Ruiz", duration: "60 min", day: 5, spots: 10 },
  { time: "10:00", class: "Mobility & Recovery", coach: "Laura Vega", duration: "40 min", day: 6, spots: 12 },
  { time: "11:00", class: "Pilates", coach: "Laura Vega", duration: "50 min", day: 6, spots: 8 },
];

const Schedule = () => {
  const { t } = useTranslation();
  const [activeDay, setActiveDay] = useState(0);
  const days = t("schedulePage.days", { returnObjects: true }) as string[];
  const daySchedule = schedule.filter((s) => s.day === activeDay);

  return (
    <Layout>
      <PageHero
        image={openGymImg}
        tag={t("schedulePage.tag")}
        headline={t("schedulePage.headline")}
        body={t("schedulePage.body")}
      />

      <div className="section-container my-12">
        <div className="card-premium p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-lg text-foreground">{t("schedulePage.trialHeadline")}</h3>
            <p className="text-sm text-muted-foreground">{t("schedulePage.trialBody")}</p>
          </div>
          <Button variant="hero" size="lg" className="shrink-0">{t("schedulePage.bookTrial")}</Button>
        </div>
      </div>

      <div className="section-container mb-8">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {days.map((day, i) => (
            <button key={day} onClick={() => setActiveDay(i)} className={`pill-tag cursor-pointer whitespace-nowrap transition-all duration-300 ${activeDay === i ? "bg-primary/10 border-primary/40 text-primary" : "hover:border-foreground/20"}`}>{day}</button>
          ))}
        </div>
      </div>

      <Section>
        {daySchedule.length > 0 ? (
          <div className="flex flex-col gap-3">
            {daySchedule.map((s, i) => (
              <div key={i} className="card-premium p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <div className="text-xl font-serif font-medium text-foreground w-16">{s.time}</div>
                  <div>
                    <h3 className="font-medium text-foreground">{s.class}</h3>
                    <p className="text-xs text-muted-foreground">{s.coach} · {s.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-xs ${s.spots > 0 ? "text-wellness" : "text-destructive"}`}>
                    {s.spots > 0 ? t("schedulePage.spotsLeft", { count: s.spots }) : t("schedulePage.waitlist")}
                  </span>
                  <Button variant={s.spots > 0 ? "hero" : "hero-outline"} size="sm">
                    {s.spots > 0 ? t("schedulePage.book") : t("schedulePage.joinWaitlist")}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground font-serif text-lg">{t("schedulePage.noClasses", { day: days[activeDay] })}</p>
            <p className="text-sm text-muted-foreground/70 mt-2">{t("schedulePage.openGymNote")}</p>
          </div>
        )}
      </Section>

      <Section className="bg-secondary/30">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-editorial-md text-foreground">{t("schedulePage.upsellHeadline")}</h2>
          <p className="text-body-lg mt-4">{t("schedulePage.upsellBody")}</p>
          <Link to="/memberships" className="mt-8 inline-block">
            <Button variant="hero" size="lg">{t("schedulePage.compareMemberships")}</Button>
          </Link>
        </div>
      </Section>
    </Layout>
  );
};

export default Schedule;
