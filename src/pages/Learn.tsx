import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Book } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type RootState } from "@/store/store";
import { setLearningCategory } from "@/store/slices/filterSlice";
import { articles } from "@/data/articles";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const Learn = () => {
  const dispatch = useDispatch();
  const { learningCategory } = useSelector((state: RootState) => state.filters);

  const categories = [
    "All",
    "Basics",
    "Guide",
    "Finance",
    "Security",
    "Credit Score",
    "Rewards",
  ];

  // Filter articles based on selected category
  const filteredArticles = useMemo(() => {
    if (learningCategory === "All") {
      return articles;
    }
    return articles.filter((article) => article.category === learningCategory);
  }, [learningCategory]);

  const handleCategoryChange = (category: string) => {
    dispatch(setLearningCategory(category));
  };

  return (
    <motion.div
      className="min-h-screen bg-banking-grey"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <Header />

      <motion.div className="max-w-6xl mx-auto px-4 py-12" variants={fadeInUp}>
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <h1 className="text-4xl font-bold text-banking-text mb-4">
            Learn About Credit Cards
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Master the world of credit cards with our comprehensive guides and
            educational resources
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          variants={fadeInUp}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-lg cursor-pointer font-medium transition-colors ${
                category === learningCategory
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              }`}
              variants={fadeInUp}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={fadeInUp}
        >
          {filteredArticles.map((article) => {
            const IconComponent = article.icon;
            return (
              <motion.div key={article.id} variants={fadeInUp}>
                <Card className="banking-card hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/${article.image}?auto=format&fit=crop&w=400&h=225`}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs bg-blue-400/20 text-text-banking-blue px-2 py-1 rounded-full font-medium">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {article.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-lg leading-tight">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      {article.description}
                    </p>
                    <div className="flex items-center mt-4">
                      <IconComponent className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm text-[#2C3E50] font-medium">
                        Read Article
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Show message when no articles found */}
        {filteredArticles.length === 0 && (
          <motion.div className="text-center py-12" variants={fadeInUp}>
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-banking-text mb-2">
              No articles found
            </h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div className="text-center" variants={fadeInUp}>
          <div className="banking-card max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #1B4F72 0%, #2E86AB 100%)",
                }}
              >
                <Book className="h-6 w-6 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-banking-text mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-6">
              Get the latest credit card news, tips, and educational content
              delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <motion.input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                variants={fadeInUp}
              />
              <motion.button
                variants={fadeInUp}
                className="text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, #1B4F72 0%, #2E86AB 100%)",
                }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <Footer />
    </motion.div>
  );
};

export default Learn;
