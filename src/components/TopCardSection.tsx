import { useNavigate } from "react-router-dom";
import { Star, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { topCards } from "@/data/topcard";
import { motion } from "framer-motion";

const TopCardsSection = () => {
  const navigate = useNavigate();
  
  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="py-20 px-4"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-3xl font-bold text-banking-text mb-4">
            Popular Credit Cards
          </h2>
          <p className="text-lg text-gray-600">
            Most recommended cards by our users
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {topCards.map((card, idx) => (
            <motion.div
              key={idx}
              className="banking-card text-center transform-gpu hover:scale-105 transition-transform duration-300 ease-in-out"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#2C3E50] to-[#34495E] rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{card.name}</h3>
              <div className="flex items-center justify-center mb-2">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="font-medium text-yellow-400">{card.rating}</span>
              </div>
              <p className="text-yellow-400 font-medium text-sm">
                {card.highlight}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div className="text-center" variants={fadeInUp}>
          <Button
            onClick={() => navigate("/compare")}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold cursor-pointer text-lg px-8 py-4 transform-gpu hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Compare All Cards
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TopCardsSection;

