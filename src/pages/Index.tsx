import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { features } from "@/data/features";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Header />
      <HeroSection onGetStarted={() => navigate("/compare")} />
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-banking-text mb-4">
              Why Choose CardMitra?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              India's most intelligent credit card comparison platform powered
              by AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
