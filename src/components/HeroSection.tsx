import { Button } from "@/components/ui/button";
import { Search, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  const navigate = useNavigate();

  return (
    <section className="trust-gradient py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <Sparkles className="h-4 w-4 text-yellow-300 mr-2" />
          <span className="text-sm font-medium text-white">
            AI-Powered Recommendations
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Find Your Perfect
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
            Credit Card
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto">
          Compare credit cards from all major Indian banks with our intelligent
          AI assistant. Get personalized recommendations based on your spending
          habits and financial goals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            onClick={onGetStarted}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg px-8 py-4 rounded-xl shadow-lg cursor-pointer"
          >
            <Search className="mr-1 h-5 w-5" />
            Compare Cards Now
          </Button>
          <Button
            onClick={() => navigate("/learn")}
            variant="outline"
            className="border-white/50 text-banking-text hover:bg-gray font-semibold text-lg px-8 py-4 rounded-xl cursor-pointer"
          >
            Learn More
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { value: "50+", label: "Credit Cards" },
            { value: "15+", label: "Major Banks" },
            { value: "AI", label: "Smart Matching" },
          ].map((stat) => (
            <div key={stat.label} className="space-y-1">
              <div className="text-4xl font-bold text-yellow-400">
                {stat.value}
              </div>
              <div className="text-base text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
