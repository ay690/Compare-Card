import { type LucideIcon } from "lucide-react";
import FeatureCard from "./FeatureCard";
import { features } from "@/data/features";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  
  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="py-20 px-4"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={cardVariant}
        >
          <h2 className="text-3xl font-bold text-banking-text mb-4">
            Why Choose CardMitra?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            India's most intelligent credit card comparison platform powered by AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div key={idx} variants={cardVariant}>
              <FeatureCard
                icon={feature.icon as LucideIcon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;

