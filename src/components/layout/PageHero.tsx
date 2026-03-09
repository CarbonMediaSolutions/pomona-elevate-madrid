import { motion } from "framer-motion";

interface PageHeroProps {
  image: string;
  tag: string;
  headline: string;
  body?: string;
}

const PageHero = ({ image, tag, headline, body }: PageHeroProps) => {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
      </div>
      <div className="relative z-10 section-container pb-12 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <span className="pill-tag mb-6 inline-block">{tag}</span>
          <h1 className="text-editorial-xl text-foreground whitespace-pre-line">{headline}</h1>
          {body && <p className="text-body-lg mt-4 max-w-xl">{body}</p>}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
