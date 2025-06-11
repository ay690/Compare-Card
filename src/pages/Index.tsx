import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TopCardsSection from "@/components/TopCardSection";
import CTASection from "@/components/CTA";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Header />
      <HeroSection onGetStarted={() => navigate("/compare")} />
      <FeaturesSection />
      <TopCardsSection />
      <CTASection />
    </div>
  );
};

export default Index;
