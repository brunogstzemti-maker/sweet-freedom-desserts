import CountdownBar from "@/components/CountdownBar";
import HeroSection from "@/components/HeroSection";
import RecipesSection from "@/components/RecipesSection";
import BenefitsSection from "@/components/BenefitsSection";
import BonusesSection from "@/components/BonusesSection";
import PricingSection from "@/components/PricingSection";
import StepsSection from "@/components/StepsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pt-10">
      <CountdownBar />
      <HeroSection />
      <RecipesSection />
      <BenefitsSection />
      <BonusesSection />
      <PricingSection />
      <StepsSection />
      <Footer />
    </div>
  );
};

export default Index;
