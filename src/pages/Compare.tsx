import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "@/store/store";
import { setFilteredCards } from "@/store/slices/creditCardSlice";
import Header from "@/components/Header";
import ComparisonModal from "@/components/ComparisonModal";
import FilterSidebar from "@/components/FilterSidebar";
import CreditCardGrid from "@/components/CreditCardGrid";
import AIChatSidebar from "@/components/AiChatSidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Compare = () => {
  const dispatch = useDispatch();
  const { cards, filteredCards, selectedForComparison } = useSelector(
    (state: RootState) => state.creditCards
  );
  const filters = useSelector((state: RootState) => state.filters);
  const [showComparison, setShowComparison] = useState(false);

  useEffect(() => {
    let filtered = cards.filter((card) => {
      if (filters.bank && card.bank !== filters.bank) return false;
      if (filters.category && card.category !== filters.category) return false;
      if (
        card.eligibility.minSalary > filters.minSalary &&
        filters.minSalary > 0
      )
        return false;
      if (card.annualFee > filters.maxAnnualFee) return false;
      if (
        filters.loungeAccess !== null &&
        card.loungeAccess !== filters.loungeAccess
      )
        return false;
      if (
        filters.fuelSurcharge !== null &&
        card.fuelSurcharge !== filters.fuelSurcharge
      )
        return false;
      return true;
    });

    filtered = filtered.sort((a, b) => {
      const aValue =
        filters.sortBy === "name"
          ? a[filters.sortBy].toLowerCase()
          : a[filters.sortBy];
      const bValue =
        filters.sortBy === "name"
          ? b[filters.sortBy].toLowerCase()
          : b[filters.sortBy];

      if (filters.sortOrder === "asc") {
        if (aValue > bValue) return 1;
        if (aValue < bValue) return -1;
        return 0;
      } else {
        if (aValue < bValue) return 1;
        if (aValue > bValue) return -1;
        return 0;
      }
    });

    dispatch(setFilteredCards(filtered));
  }, [cards, filters, dispatch]);

  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="min-h-screen bg-[#167d9c1a]"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <Header />

      <motion.div className="flex flex-col lg:flex-row" variants={fadeIn}>
        <motion.div
          className="w-full md:w-80 bg-white/75 border-b border-gray-200 md:border-b-0 md:border-r shadow-2xl"
          variants={fadeIn}
        >
          <FilterSidebar />
        </motion.div>

        {/* Main Content */}
        <motion.div className="flex-1 p-6" variants={fadeIn}>
          <motion.div
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4"
            variants={fadeIn}
          >
            <div>
              <h1 className="text-2xl font-bold text-banking-text">
                Credit Card Comparison
              </h1>
              <p className="text-gray-600 mt-1">
                {filteredCards.length} cards match your criteria
              </p>
            </div>

            {selectedForComparison.length > 0 && (
              <motion.div
                className="flex items-center gap-3"
                variants={fadeIn}
              >
                <Badge
                  variant="secondary"
                  className="text-white w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #1B4F72 0%, #2E86AB 100%)",
                  }}
                >
                  {selectedForComparison.length}
                </Badge>
                <Button
                  onClick={() => setShowComparison(true)}
                  className="cursor-pointer transition-transform duration-200 hover:scale-105 text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #1B4F72 0%, #2E86AB 100%)",
                  }}
                >
                  Compare Selected Cards
                </Button>
              </motion.div>
            )}
          </motion.div>

          <CreditCardGrid cards={filteredCards} />
        </motion.div>
      </motion.div>

      <motion.div
        className="block lg:w-80 bg-white/75 border-l border-gray-200 shadow-2xl"
        variants={fadeIn}
      >
        <AIChatSidebar />
      </motion.div>

      <ComparisonModal
        isOpen={showComparison}
        onClose={() => setShowComparison(false)}
      />
    </motion.div>
  );
};

export default Compare;
