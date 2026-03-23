import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import BrandPositioning from "@/components/home/BrandPositioning";
import ExperiencePillars from "@/components/home/ExperiencePillars";
import SignatureExperiences from "@/components/home/SignatureExperiences";
import SocialProof from "@/components/home/SocialProof";
import MembershipTeaser from "@/components/home/MembershipTeaser";
import HealthyBarPreview from "@/components/home/HealthyBarPreview";

import LocationSection from "@/components/home/LocationSection";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <BrandPositioning />
      <ExperiencePillars />
      <SignatureExperiences />
      <SocialProof />
      <MembershipTeaser />
      <HealthyBarPreview />
      
      <LocationSection />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
