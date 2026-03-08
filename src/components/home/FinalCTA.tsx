import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="section-padding">
      <div className="section-container text-center">
        <div className="divider-elegant mb-10" />
        <h2 className="text-editorial-xl text-foreground max-w-3xl mx-auto">
          Join the club that changes<br />how fitness feels.
        </h2>
        <p className="text-body-lg mt-6 max-w-xl mx-auto">
          Performance, recovery, nourishment, and community — all in one premium space designed around modern wellness.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link to="/schedule">
            <Button variant="hero" size="xl">
              Book Your First Session
            </Button>
          </Link>
          <Link to="/memberships">
            <Button variant="hero-outline" size="xl">
              View Memberships
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
