import { useNavigate } from "react-router-dom";
import { Star, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTA";
import { features } from "@/data/features";
import { topCards } from "@/data/topcard";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Header />
      <HeroSection onGetStarted={() => navigate("/compare")} />

      <section className="py-20 px-4">
        {/* FEATURES WRAPPER */}
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-banking-text mb-4">
              Why Choose CardMitra?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              India's most intelligent credit card comparison platform powered
              by AI
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, idx) => (
              <FeatureCard
                key={idx}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>{" "}
        
        <div className="max-w-6xl mx-auto">
         
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-banking-text mb-4">
              Popular Credit Cards
            </h2>
            <p className="text-lg text-gray-600">
              Most recommended cards by our users
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {topCards.map((card, idx) => (
              <div
                key={idx}
                className="banking-card text-center transform-gpu hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#2C3E50] to-[#34495E] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{card.name}</h3>
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="font-medium text-yellow-400">
                    {card.rating}
                  </span>
                </div>
                <p className="text-yellow-400 font-medium text-sm">
                  {card.highlight}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              onClick={() => navigate("/compare")}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold cursor-pointer text-lg px-8 py-4 transform-gpu hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              Compare All Cards
            </Button>
          </div>
        </div>
      </section>
      
      <CTASection />
    </div>
  );
};

export default Index;
