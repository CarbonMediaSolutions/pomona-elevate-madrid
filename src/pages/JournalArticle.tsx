import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import hiitImg from "@/assets/hiit-training.jpg";
import runningImg from "@/assets/running-club.jpg";
import barImg from "@/assets/healthy-bar.jpg";
import recoveryImg from "@/assets/recovery-room.jpg";
import pilatesImg from "@/assets/pilates-studio.jpg";
import openGymImg from "@/assets/open-gym.jpg";

const articleImages: Record<string, string> = {
  "balanced-training-week": hiitImg,
  "recovery-is-performance": recoveryImg,
  "pre-post-workout-nutrition": barImg,
  "boutique-fitness-consistency": pilatesImg,
  "first-hyrox-session": runningImg,
  "wellness-clubs-madrid": openGymImg,
};

const articleSlugs = [
  "balanced-training-week",
  "recovery-is-performance",
  "pre-post-workout-nutrition",
  "boutique-fitness-consistency",
  "first-hyrox-session",
  "wellness-clubs-madrid",
];

const JournalArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();

  if (!slug || !articleSlugs.includes(slug)) {
    return (
      <Layout>
        <section className="pt-32 pb-20">
          <div className="section-container text-center">
            <h1 className="text-editorial-lg text-foreground">Article not found</h1>
            <Link to="/journal" className="text-primary mt-6 inline-block hover:underline">
              ← Back to Journal
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const key = slug.replace(/-/g, "_");
  const title = t(`articles.${key}.title`);
  const category = t(`articles.${key}.category`);
  const readTime = t(`articles.${key}.readTime`);
  const intro = t(`articles.${key}.intro`);
  const sections: { heading: string; body: string }[] = t(`articles.${key}.sections`, { returnObjects: true }) as { heading: string; body: string }[];

  return (
    <Layout>
      <article>
        {/* Hero */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={articleImages[slug]}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="section-container">
              <span className="pill-tag mb-4 inline-block">{category}</span>
              <h1 className="text-editorial-lg text-foreground max-w-3xl">{title}</h1>
              <p className="text-muted-foreground text-sm mt-3">{readTime}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="section-container max-w-3xl mx-auto py-16 md:py-24">
          <Link
            to="/journal"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("journalPage.tag")}
          </Link>

          <p className="text-body-lg mb-12 leading-relaxed">{intro}</p>

          {Array.isArray(sections) && sections.map((section, i) => (
            <div key={i} className="mb-10">
              <h2 className="text-editorial-md text-foreground mb-4">{section.heading}</h2>
              <p className="text-body leading-relaxed">{section.body}</p>
            </div>
          ))}

          <div className="divider-elegant my-16" />

          <div className="text-center">
            <p className="text-body mb-6">{t("articles.cta_text")}</p>
            <Link
              to="/schedule"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              {t("nav.bookSession")}
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default JournalArticle;
