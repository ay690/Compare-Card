import { Button } from "@/components/ui/button";
import { Search, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  const navigate = useNavigate();

  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="trust-gradient py-24 px-6"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="max-w-6xl mx-auto text-center" variants={fadeInUp}>
        <motion.div
          className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
          variants={fadeInUp}
        >
          <Sparkles className="h-4 w-4 text-yellow-300 mr-2" />
          <span className="text-sm font-medium text-white">
            AI-Powered Recommendations
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6"
          variants={fadeInUp}
        >
          Find Your Perfect
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
            Credit Card
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto"
          variants={fadeInUp}
        >
          Compare credit cards from all major Indian banks with our intelligent
          AI assistant. Get personalized recommendations based on your spending
          habits and financial goals.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          variants={fadeInUp}
        >
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
        </motion.div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-8" variants={fadeInUp}>
          {[
            { value: "50+", label: "Credit Cards" },
            { value: "15+", label: "Major Banks" },
            { value: "AI", label: "Smart Matching" },
          ].map((stat) => (
            <div key={stat.label} className="space-y-1">
              <motion.div className="text-4xl font-bold text-yellow-400" variants={fadeInUp}>
                {stat.value}
              </motion.div>
              <motion.div className="text-base text-white/80" variants={fadeInUp}>
                {stat.label}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
