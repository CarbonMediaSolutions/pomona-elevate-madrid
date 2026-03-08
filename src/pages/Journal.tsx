import Layout from "@/components/layout/Layout";
import Section from "@/components/layout/Section";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import hiitImg from "@/assets/hiit-training.jpg";
import runningImg from "@/assets/running-club.jpg";
import barImg from "@/assets/healthy-bar.jpg";

const articles = [
  {
    title: "How to build a balanced training week",
    excerpt: "The science of programming: why mixing intensity, recovery, and mobility creates better long-term results than going hard every day.",
    category: "Training",
    readTime: "5 min",
    image: hiitImg,
  },
  {
    title: "Why recovery is part of performance",
    excerpt: "From infrared sauna to sleep optimization — understanding why what you do between sessions defines your progress.",
    category: "Recovery",
    readTime: "4 min",
    image: barImg,
  },
  {
    title: "The best pre- and post-workout nutrition habits",
    excerpt: "What to eat, when to eat it, and why the simple approach outperforms every complicated diet protocol.",
    category: "Nutrition",
    readTime: "6 min",
    image: barImg,
  },
  {
    title: "Why boutique fitness works better for consistency",
    excerpt: "Small groups, expert coaching, and community accountability — the three ingredients that keep you coming back.",
    category: "Community",
    readTime: "4 min",
    image: hiitImg,
  },
  {
    title: "How to prepare for your first HYROX session",
    excerpt: "Everything you need to know before stepping into a HYROX class — from gear to mindset to what to expect.",
    category: "HYROX",
    readTime: "5 min",
    image: runningImg,
  },
  {
    title: "The rise of wellness clubs in Madrid",
    excerpt: "How Madrid's fitness scene is evolving from big-box gyms to integrated wellness destinations — and why it matters.",
    category: "Madrid Lifestyle",
    readTime: "7 min",
    image: runningImg,
  },
];

const Journal = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="section-container text-center max-w-3xl mx-auto">
          <span className="pill-tag mb-6 inline-block">Journal</span>
          <h1 className="text-editorial-xl text-foreground">
            Insights for<br />better movement.
          </h1>
          <p className="text-body-lg mt-6">
            Training science, recovery protocols, nutrition wisdom, and Madrid lifestyle — curated by the Pomona team.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => (
            <article key={a.title} className="card-premium group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 pill-tag text-[10px] bg-background/50 backdrop-blur-sm border-foreground/10">
                  {a.category}
                </span>
              </div>
              <div className="p-6">
                <h2 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">{a.title}</h2>
                <p className="text-body text-sm mt-2">{a.excerpt}</p>
                <div className="text-xs text-muted-foreground/60 mt-4">{a.readTime} read</div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Journal;
