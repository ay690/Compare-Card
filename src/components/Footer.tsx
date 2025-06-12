import { CreditCard, Mail, Phone, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer
      className="text-white"
      style={{
        background: "linear-gradient(135deg, #202e37 0%, #102833 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="trust-gradient p-2 rounded-lg mr-3">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">CardMitra</span>
            </div>
            <p className="text-gray-300">
              India's most intelligent credit card comparison platform powered
              by AI
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate("/")}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/compare")}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Compare Cards
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/reviews")}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/learn")}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Learn
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li>
                <button
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  onClick={() => navigate("/*")}
                >
                  Help Center
                </button>
              </li>
              <li>
                <button
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  onClick={() => navigate("/*")}
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  onClick={() => navigate("/*")}
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  onClick={() => navigate("/*")}
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="text-gray-300">support@cardmitra.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-gray-300">+91 1800-123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-gray-300">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 CardMitra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
