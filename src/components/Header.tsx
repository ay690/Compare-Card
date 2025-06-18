import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CreditCard, Menu, X } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Compare Cards", path: "/compare" },
    { label: "Reviews", path: "/reviews" },
    { label: "Learn", path: "/learn" },
  ];

  const leftVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const rightVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
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
                  background:
                    "linear-gradient(135deg, #1B4F72 0%, #2E86AB 100%)",
                }}
              />
            </div>
            <span className="text-2xl font-bold text-[#2C3E50]">CardMitra</span>
          </motion.div>

          <motion.div
            className="hidden md:flex items-center space-x-8"
            variants={rightVariant}
            initial="hidden"
            animate="visible"
          >
            <nav className="flex items-center space-x-8">
              {navItems.map(({ label, path }) => (
                <span
                  key={label}
                  onClick={() => navigate(path)}
                  className="cursor-pointer text-banking-text hover:text-[#10171f] transition-colors"
                >
                  {label}
                </span>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="hidden sm:inline-flex text-white px-6 py-3 cursor-pointer rounded-lg font-medium transition-transform duration-200 hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, #F39C12 0%, #F1C40F 100%)",
                }}
              >
                Sign In
              </Button>
              <Button
                className="text-white px-6 py-3 rounded-lg cursor-pointer font-medium transition-transform duration-200 hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, #1B4F72 0%, #2E86AB 100%)",
                }}
              >
                Get Started
              </Button>
            </div>
          </motion.div>

          {/* Mobile Menu Icon */}
          <motion.div
            className="md:hidden"
            initial="hidden"
            animate="visible"
            variants={rightVariant}
          >
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 cursor-pointer"
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </motion.div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden mt-2 space-y-2 bg-white shadow rounded-lg px-4 py-4"
            >
              {navItems.map(({ label, path }) => (
                <div
                  key={label}
                  onClick={() => {
                    setMenuOpen(false);
                    navigate(path);
                  }}
                  className="cursor-pointer text-banking-text hover:text-[#10171f] transition-colors"
                >
                  {label}
                </div>
              ))}

              <div className="pt-4 flex flex-col gap-2">
                <Button
                  variant="outline"
                  className="text-white font-medium cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(135deg, #F39C12 0%, #F1C40F 100%)",
                  }}
                >
                  Sign In
                </Button>
                <Button
                  className="text-white font-medium cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(135deg, #1B4F72 0%, #2E86AB 100%)",
                  }}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
