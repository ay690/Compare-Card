import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-100"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="text-center" variants={fadeIn}>
        <motion.h1 className="text-4xl font-bold mb-4" variants={fadeIn}>
          404
        </motion.h1>
        <motion.p className="text-xl text-gray-600 mb-4" variants={fadeIn}>
          Oops! 😥 Page not found
        </motion.p>
        <motion.a
          href="/"
          className="text-blue-500 hover:text-blue-700 underline"
          variants={fadeIn}
        >
          Return to Home
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
