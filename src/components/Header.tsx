import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();

  const leftVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const rightVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <header className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <motion.div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
            variants={leftVariant}
            initial="hidden"
            animate="visible"
          >
            <div className="p-2 rounded-lg">
              <CreditCard
                className="h-10 w-10 text-white rounded-sm p-1"
                style={{
                  background: "linear-gradient(135deg, #1B4F72 0%, #2E86AB 100%)",
                }}
              />
            </div>
            <span className="text-2xl font-bold text-[#2C3E50]">
              CardMitra
            </span>
          </motion.div>

          <motion.div
            className="flex items-center space-x-8"
            variants={rightVariant}
            initial="hidden"
            animate="visible"
          >
            <nav className="hidden md:flex items-center space-x-8">
              <span
                onClick={() => navigate("/")}
                className="cursor-pointer text-banking-text hover:text-[#10171f] transition-colors"
              >
                Home
              </span>
              <span
                onClick={() => navigate("/compare")}
                className="cursor-pointer text-banking-text hover:text-[#10171f] transition-colors"
              >
                Compare Cards
              </span>
              <span
                onClick={() => navigate("/reviews")}
                className="cursor-pointer text-banking-text hover:text-[#10171f] transition-colors"
              >
                Reviews
              </span>
              <span
                onClick={() => navigate("/learn")}
                className="cursor-pointer text-banking-text hover:text-[#10171f] transition-colors"
              >
                Learn
              </span>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="hidden sm:inline-flex cursor-pointer text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, #F39C12 0%, #F1C40F 100%)",
                }}
              >
                Sign In
              </Button>
              <Button
                className="text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, #1B4F72 0%, #2E86AB 100%)",
                }}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;

