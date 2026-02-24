import CountdownBar from "@/components/CountdownBar";
import HeroSection from "@/components/HeroSection";
import HeroTestimonials from "@/components/HeroTestimonials";
import RecipesSection from "@/components/RecipesSection";
import BenefitsSection from "@/components/BenefitsSection";
import BonusesSection from "@/components/BonusesSection";
import PricingSection from "@/components/PricingSection";
import StepsSection from "@/components/StepsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pt-12">
      <CountdownBar />
      <HeroSection />
      <HeroTestimonials />
      <RecipesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <BonusesSection />
      <PricingSection />
      <StepsSection />
      <Footer />
    </div>
  );
};

export default Index;
