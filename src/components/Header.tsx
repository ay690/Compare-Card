import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
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
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-banking-text hover:text-[#10171f] transition-colors"
            >
              Home
            </a>
            <a
              href="/compare"
              className="text-banking-text hover:text-[#10171f] transition-colors"
            >
              Compare Cards
            </a>
            <a
              href="#"
              className="text-banking-text hover:text-[#10171f] transition-colors"
            >
              Reviews
            </a>
            <a
              href="#"
              className="text-banking-text hover:text-[#10171f] transition-colors"
            >
              Learn
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="hidden sm:inline-flex cursor-pointer text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #F39C12 0%, #F1C40F 100%)",
              }}
            >
              Sign In
            </Button>
            <Button
              className="text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #1B4F72 0%, #2E86AB 100%)",
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
