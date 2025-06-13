import { CreditCard, Mail, Phone, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const navigate = useNavigate();

  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.footer
      className="text-white"
      style={{
        background: "linear-gradient(135deg, #202e37 0%, #102833 100%)",
      }}
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div className="grid md:grid-cols-4 gap-8" variants={fadeInUp}>
          {/* Brand */}
          <div className="space-y-4">
            <motion.div className="flex items-center" variants={fadeInUp}>
              <div className="trust-gradient p-2 rounded-lg mr-3">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">CardMitra</span>
            </motion.div>
            <motion.p className="text-gray-300" variants={fadeInUp}>
              India's most intelligent credit card comparison platform powered
              by AI
            </motion.p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <motion.h3 className="text-lg font-semibold" variants={fadeInUp}>
              Quick Links
            </motion.h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'Compare Cards', path: '/compare' },
                { label: 'Reviews', path: '/reviews' },
                { label: 'Learn', path: '/learn' },
              ].map((link) => (
                <motion.li key={link.label} variants={fadeInUp}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <motion.h3 className="text-lg font-semibold" variants={fadeInUp}>
              Support
            </motion.h3>
            <ul className="space-y-2">
              {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <motion.li key={item} variants={fadeInUp}>
                  <button
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                    onClick={() => navigate('/*')}
                  >
                    {item}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <motion.h3 className="text-lg font-semibold" variants={fadeInUp}>
              Contact
            </motion.h3>
            <div className="space-y-3">
              <motion.div className="flex items-center space-x-3" variants={fadeInUp}>
                <Mail className="h-4 w-4 text-secondary" />
                <span className="text-gray-300">support@cardmitra.com</span>
              </motion.div>
              <motion.div className="flex items-center space-x-3" variants={fadeInUp}>
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-gray-300">+91 1800-123-4567</span>
              </motion.div>
              <motion.div className="flex items-center space-x-3" variants={fadeInUp}>
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-gray-300">Mumbai, India</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div className="border-t border-gray-700 mt-8 pt-8 text-center" variants={fadeInUp}>
          <p className="text-gray-300">
            © 2025 CardMitra. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
