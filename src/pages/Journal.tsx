import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Section from "@/components/layout/Section";
import PageHero from "@/components/layout/PageHero";
import hiitImg from "@/assets/hiit-training.jpg";
import runningImg from "@/assets/running-club.jpg";
import barImg from "@/assets/healthy-bar.jpg";
import recoveryImg from "@/assets/recovery-room.jpg";
import pilatesImg from "@/assets/pilates-studio.jpg";
import openGymImg from "@/assets/open-gym.jpg";
import { useTranslation } from "react-i18next";
import { useCmsSection } from "@/hooks/useCmsContent";

const articles = [
  { slug: "balanced-training-week", key: "balanced_training_week", image: hiitImg },
  { slug: "recovery-is-performance", key: "recovery_is_performance", image: recoveryImg },
  { slug: "pre-post-workout-nutrition", key: "pre_post_workout_nutrition", image: barImg },
  { slug: "boutique-fitness-consistency", key: "boutique_fitness_consistency", image: pilatesImg },
  { slug: "first-hyrox-session", key: "first_hyrox_session", image: runningImg },
  { slug: "wellness-clubs-madrid", key: "wellness_clubs_madrid", image: openGymImg },
];

const Journal = () => {
  const { t } = useTranslation();
  const cmsHero = useCmsSection("journal", "hero");

  return (
    <Layout>
      <PageHero
        image={pilatesImg}
        tag={(cmsHero?.tag as string) || t("journalPage.tag")}
        headline={(cmsHero?.headline as string) || t("journalPage.headline")}
        body={(cmsHero?.body as string) || t("journalPage.body")}
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => (
            <Link to={`/journal/${a.slug}`} key={a.slug}>
              <article className="card-premium group overflow-hidden h-full">
                <div className="relative h-48 overflow-hidden">
                  <img src={a.image} alt={t(`articles.${a.key}.title`)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <span className="absolute top-4 left-4 pill-tag text-[10px] bg-background/50 backdrop-blur-sm border-foreground/10">
                    {t(`articles.${a.key}.category`)}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                    {t(`articles.${a.key}.title`)}
                  </h2>
                  <p className="text-body text-sm mt-2">{t(`articles.${a.key}.intro`).slice(0, 150)}...</p>
                  <div className="text-xs text-muted-foreground/60 mt-4">{t(`articles.${a.key}.readTime`)}</div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Journal;
