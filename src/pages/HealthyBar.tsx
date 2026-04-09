import Layout from "@/components/layout/Layout";
import Section from "@/components/layout/Section";
import PageHero from "@/components/layout/PageHero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import barImg from "@/assets/healthy-bar.jpg";
import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";
import { useCmsSection } from "@/hooks/useCmsContent";

const juices = {
  beHealthy: [
    { name: "Super Green", desc: "Spinach, celery, cucumber, apple, lemon, ginger" },
    { name: "Detox Boost", desc: "Beetroot, carrot, apple, ginger, lemon" },
    { name: "Immune Shield", desc: "Orange, turmeric, ginger, carrot, lemon" },
  ],
  beFit: [
    { name: "Protein Power", desc: "Banana, peanut butter, whey protein, oat milk" },
    { name: "Berry Blast", desc: "Mixed berries, whey protein, almond milk, chia seeds" },
    { name: "Choco Muscle", desc: "Banana, cacao, whey protein, oat milk, almond butter" },
  ],
  beVeggie: [
    { name: "Tropical Green", desc: "Mango, spinach, pineapple, coconut water" },
    { name: "Açaí Dream", desc: "Açaí, banana, mixed berries, almond milk" },
    { name: "Avocado Silk", desc: "Avocado, banana, spinach, oat milk, honey" },
  ],
  beEnergy: [
    { name: "Golden Elixir", desc: "Turmeric, mango, ginger, oat milk, black pepper" },
    { name: "Matcha Fuel", desc: "Matcha, banana, almond milk, honey" },
    { name: "Espresso Shake", desc: "Espresso, banana, whey protein, oat milk, cacao" },
  ],
};

const healthyShots = [
  { name: "Wake Me Up", desc: "Ginger, lemon, cayenne", price: "3,00" },
  { name: "Adrenaline Blast", desc: "Turmeric, ginger, orange, black pepper", price: "3,00" },
];

const snacks = [
  { name: "Overnight Oats", desc: "Oats, Greek yogurt, seasonal fruit, honey", price: "5,50" },
  { name: "Açaí Pomaçaí", desc: "Açaí, granola, banana, coconut, peanut butter", price: "7,90" },
  { name: "Yogurt Greek Honey", desc: "Greek yogurt, honey, granola, seasonal fruit", price: "5,50" },
];

const pomonitos = [
  { name: "Banana Bread", price: "3,50" },
  { name: "Bananis", price: "2,50" },
  { name: "Martas", price: "2,50" },
  { name: "Brownie", price: "3,50" },
  { name: "Olivias", price: "2,50" },
  { name: "Belenes", price: "2,50" },
];

const coffee = [
  { name: "Espresso", price: "1,80" },
  { name: "Americano", price: "2,20" },
  { name: "Flat White", price: "3,20" },
  { name: "Cappuccino", price: "3,00" },
  { name: "Latte", price: "3,20" },
  { name: "Cortado", price: "2,20" },
];

const matcha = [
  { name: "Matcha Latte", price: "4,50" },
  { name: "Matcha Iced", price: "4,50" },
  { name: "Matcha Tonic", price: "5,00" },
];

const salads = [
  { name: "Caesar Pomona", desc: "Chicken, romaine, parmesan, croutons, Caesar dressing", price: "11,90" },
  { name: "Mediterranean Bowl", desc: "Quinoa, feta, olives, tomato, cucumber, hummus", price: "11,90" },
  { name: "Salmon Poke", desc: "Salmon, avocado, edamame, rice, soy-sesame dressing", price: "13,90" },
  { name: "Tuna Poke", desc: "Tuna, mango, avocado, rice, spicy mayo", price: "13,90" },
];

const tostadas = {
  clasicas: [
    { name: "Tomato & EVOO", desc: "Crushed tomato, extra virgin olive oil, sea salt" },
    { name: "Butter & Jam", desc: "Artisan butter, seasonal jam" },
  ],
  medium: [
    { name: "Avocado Toast", desc: "Smashed avocado, cherry tomato, seeds, chili flakes" },
    { name: "Salmon & Cream Cheese", desc: "Smoked salmon, cream cheese, capers, dill" },
  ],
  large: [
    { name: "Serranito Pomona", desc: "Ibérico ham, tomato, manchego, rocket, EVOO" },
    { name: "Chicken Club", desc: "Grilled chicken, avocado, bacon, tomato, aioli" },
  ],
};

const paninis = [
  { name: "Caprese", desc: "Mozzarella, tomato, basil, pesto", price: "7,90" },
  { name: "Turkey & Brie", desc: "Turkey, brie, rocket, honey mustard", price: "7,90" },
];

const menus = {
  desayuno: [
    { name: "Pomona Rise", desc: "Coffee + toast (classic)", price: "7,50" },
    { name: "Pomona Boost", desc: "Coffee + toast (medium) + juice", price: "11,50" },
  ],
  comida: [
    { name: "Pomona Roots", desc: "Salad + drink", price: "13,90" },
    { name: "Pomona Fuel", desc: "Poke + drink", price: "13,90" },
  ],
  merienda: [
    { name: "Sweet & Fit", desc: "Coffee + Pomonito", price: "9,50" },
    { name: "Snack Balance", desc: "Smoothie + Pomonito", price: "9,50" },
  ],
};

const HealthyBar = () => {
  const { t } = useTranslation();

  const MenuItem = ({ name, desc, price, tag }: { name: string; desc?: string; price?: string; tag?: string }) => (
    <div className="card-premium p-5 flex justify-between items-start gap-4">
      <div className="min-w-0">
        <h3 className="font-serif text-lg text-foreground">{name}</h3>
        {desc && <p className="text-sm text-muted-foreground mt-1">{desc}</p>}
      </div>
      <div className="flex items-center gap-3 shrink-0">
        {tag && <span className="pill-tag text-[10px]">{tag}</span>}
        {price && <span className="font-serif text-foreground text-lg">€{price}</span>}
      </div>
    </div>
  );

  const SubcategoryHeader = ({ label }: { label: string }) => (
    <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 mt-8 first:mt-0">{label}</h3>
  );

  const cmsHero = useCmsSection("healthy-bar", "hero");

  return (
    <Layout>
      <PageHero
        image={barImg}
        tag={(cmsHero?.tag as string) || t("healthyBarSection.tag")}
        headline={(cmsHero?.headline as string) || t("healthyBarPage.headline")}
        body={(cmsHero?.body as string) || t("healthyBarPage.body")}
      />

      {/* Intro + Instagram */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
            <img src={barImg} alt="Pomona Healthy Bar" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div>
            <h2 className="text-editorial-md text-foreground">{t("healthyBarPage.introHeadline")}</h2>
            <p className="text-body-lg mt-4">{t("healthyBarPage.introBody")}</p>
            <p className="text-body mt-4">{t("healthyBarPage.introBody2")}</p>
            <a
              href="https://www.instagram.com/pomonahealthybar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              @pomonahealthybar
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Section>

      {/* Order Now — Delivery */}
      <Section className="bg-secondary/30">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-editorial-md text-foreground">{t("healthyBarPage.orderTitle")}</h2>
          <p className="text-body-lg mt-4">{t("healthyBarPage.orderBody")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="https://glovo.go.link/open?link_type=store&store_id=492509&adj_t=11309sjt&adjust_deeplink=glovoapp%3A%2F%2Fopen%3Flink_type%3Dstore%26store_id%3D492509" target="_blank" rel="noopener noreferrer">
              <Button variant="hero-outline" size="lg" className="w-full sm:w-auto gap-2">
                Glovo <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
            <a href="https://www.ubereats.com/es/store/pomona-club/d31aa4GjXSmSSTAIjvSvhA?diningMode=DELIVERY" target="_blank" rel="noopener noreferrer">
              <Button variant="hero-outline" size="lg" className="w-full sm:w-auto gap-2">
                Uber Eats <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </Section>

      {/* Juices & Smoothies */}
      <Section>
        <h2 className="text-editorial-md text-foreground mb-2">{t("healthyBarPage.juicesTitle")}</h2>
        <p className="text-body mb-4">{t("healthyBarPage.juicesPrice")}</p>

        {(["beHealthy", "beFit", "beVeggie", "beEnergy"] as const).map((key) => (
          <div key={key}>
            <SubcategoryHeader label={t(`healthyBarPage.${key}`)} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
              {juices[key].map((item) => (
                <MenuItem key={item.name} name={item.name} desc={item.desc} />
              ))}
            </div>
          </div>
        ))}
      </Section>

      {/* Healthy Shots */}
      <Section className="bg-secondary/30">
        <h2 className="text-editorial-md text-foreground mb-8">{t("healthyBarPage.shotsTitle")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {healthyShots.map((item) => (
            <MenuItem key={item.name} name={item.name} desc={item.desc} price={item.price} />
          ))}
        </div>
      </Section>

      {/* Build Your Own */}
      <Section>
        <h2 className="text-editorial-md text-foreground mb-4">{t("healthyBarPage.buildTitle")}</h2>
        <p className="text-body mb-8">{t("healthyBarPage.buildBody")}</p>
        <div className="card-premium p-6 md:p-8">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 text-center">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="flex flex-col items-center gap-2">
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-serif text-primary text-lg">{n}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {n === 1 ? t("healthyBarPage.buildBase") : n <= 4 ? t("healthyBarPage.buildFruit") : t("healthyBarPage.buildTopping")}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <span className="font-serif text-2xl text-foreground">€6,90</span>
          </div>
        </div>
      </Section>

      {/* Healthy Snacks */}
      <Section className="bg-secondary/30">
        <h2 className="text-editorial-md text-foreground mb-8">{t("healthyBarPage.snacksTitle")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
          {snacks.map((item) => (
            <MenuItem key={item.name} name={item.name} desc={item.desc} price={item.price} />
          ))}
        </div>

        <h3 className="text-editorial-md text-foreground mb-6">Pomonitos</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {pomonitos.map((item) => (
            <div key={item.name} className="card-premium p-4 flex justify-between items-center">
              <span className="font-serif text-foreground">{item.name}</span>
              <span className="font-serif text-foreground">€{item.price}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Coffee & Matcha */}
      <Section>
        <h2 className="text-editorial-md text-foreground mb-2">{t("healthyBarPage.coffeeTitle")}</h2>
        <p className="text-body mb-8">{t("healthyBarPage.coffeePartner")}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SubcategoryHeader label={t("healthyBarPage.coffeeSub")} />
            <div className="grid grid-cols-1 gap-3">
              {coffee.map((item) => (
                <MenuItem key={item.name} name={item.name} price={item.price} />
              ))}
            </div>
          </div>
          <div>
            <SubcategoryHeader label={t("healthyBarPage.matchaSub")} />
            <div className="grid grid-cols-1 gap-3">
              {matcha.map((item) => (
                <MenuItem key={item.name} name={item.name} price={item.price} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Salads & Pokes */}
      <Section className="bg-secondary/30">
        <h2 className="text-editorial-md text-foreground mb-8">{t("healthyBarPage.saladsTitle")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {salads.map((item) => (
            <MenuItem key={item.name} name={item.name} desc={item.desc} price={item.price} />
          ))}
        </div>

        {/* Build Your Own Salad */}
        <div className="card-premium p-6 md:p-8 mt-8">
          <h3 className="font-serif text-lg text-foreground mb-4">{t("healthyBarPage.buildSalad")}</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-serif text-primary text-lg">1</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">{t("healthyBarPage.saladBase")}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-serif text-primary text-lg">2</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">{t("healthyBarPage.saladToppings")}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-serif text-primary text-lg">3</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">{t("healthyBarPage.saladDressing")}</span>
            </div>
          </div>
          <div className="text-center mt-6">
            <span className="font-serif text-2xl text-foreground">€11,90</span>
          </div>
        </div>
      </Section>

      {/* Tostadas & Paninis */}
      <Section>
        <h2 className="text-editorial-md text-foreground mb-8">{t("healthyBarPage.tostadasTitle")}</h2>

        <SubcategoryHeader label={`${t("healthyBarPage.clasicas")} — €5,50`} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
          {tostadas.clasicas.map((item) => (
            <MenuItem key={item.name} name={item.name} desc={item.desc} />
          ))}
        </div>

        <SubcategoryHeader label={`${t("healthyBarPage.medium")} — €7,90`} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
          {tostadas.medium.map((item) => (
            <MenuItem key={item.name} name={item.name} desc={item.desc} />
          ))}
        </div>

        <SubcategoryHeader label={`${t("healthyBarPage.large")} — €11,90`} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
          {tostadas.large.map((item) => (
            <MenuItem key={item.name} name={item.name} desc={item.desc} />
          ))}
        </div>

        <SubcategoryHeader label="Paninis — €7,90" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {paninis.map((item) => (
            <MenuItem key={item.name} name={item.name} desc={item.desc} />
          ))}
        </div>
      </Section>

      {/* Menús */}
      <Section className="bg-secondary/30">
        <h2 className="text-editorial-md text-foreground mb-8">{t("healthyBarPage.menusTitle")}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {(["desayuno", "comida", "merienda"] as const).map((key) => (
            <div key={key}>
              <SubcategoryHeader label={t(`healthyBarPage.menu_${key}`)} />
              <div className="flex flex-col gap-3">
                {menus[key].map((item) => (
                  <MenuItem key={item.name} name={item.name} desc={item.desc} price={item.price} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Healthy Brunch */}
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="pill-tag mb-6 inline-block">{t("healthyBarPage.brunchTag")}</span>
          <h2 className="text-editorial-md text-foreground">{t("healthyBarPage.brunchTitle")}</h2>
          <p className="text-body-lg mt-4">{t("healthyBarPage.brunchBody")}</p>
        </div>
        <div className="card-premium p-6 md:p-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
            {["brunchDrink", "brunchSmoothie", "brunchToast", "brunchSnack", "brunchDessert"].map((key, i) => (
              <div key={key} className="flex flex-col items-center gap-2">
                <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-serif text-primary text-xl">{i + 1}</span>
                <span className="text-sm text-foreground font-medium">{t(`healthyBarPage.${key}`)}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <span className="font-serif text-3xl text-foreground">€24</span>
            <p className="text-sm text-muted-foreground mt-1">{t("healthyBarPage.brunchPerPerson")}</p>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-secondary/30">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-editorial-md text-foreground">{t("healthyBarPage.ctaHeadline")}</h2>
          <p className="text-body-lg mt-4">{t("healthyBarPage.ctaBody")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/contact">
              <Button variant="hero" size="lg">{t("healthyBarPage.planVisit")}</Button>
            </Link>
            <a href="https://glovo.go.link/open?link_type=store&store_id=492509&adj_t=11309sjt&adjust_deeplink=glovoapp%3A%2F%2Fopen%3Flink_type%3Dstore%26store_id%3D492509" target="_blank" rel="noopener noreferrer">
              <Button variant="hero-outline" size="lg" className="gap-2">
                {t("healthyBarPage.orderDelivery")} <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default HealthyBar;
