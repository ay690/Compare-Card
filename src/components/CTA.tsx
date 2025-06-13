import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTASection = () => {
  const navigate = useNavigate();

  // Animation variants
  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="py-20 px-4 trust-gradient"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="max-w-4xl mx-auto text-center" variants={fadeInUp}>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          variants={fadeInUp}
        >
          Ready to Find Your Perfect Credit Card?
        </motion.h2>
        <motion.p
          className="text-xl text-white/90 mb-8"
          variants={fadeInUp}
        >
          Join thousands of users who found their ideal credit card with our
          AI-powered platform
        </motion.p>

        <motion.div variants={fadeInUp}>
          <Button
            onClick={() => navigate("/compare")}
            className="
              bg-yellow-400 hover:bg-yellow-500 text-black font-semibold cursor-pointer px-8 py-4 
              rounded-xl shadow-lg
              transform-gpu hover:scale-105 
              transition-transform duration-300 ease-in-out
            "
          >
            Start Comparing Now
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default CTASection;

