import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { type RootState } from '@/store/store';
import { setFilteredCards } from '@/store/slices/creditCardSlice';
import Header from '@/components/Header';
import ComparisonModal from '@/components/ComparisonModal';
import FilterSidebar from '@/components/FilterSidebar';
import CreditCardGrid from '@/components/CreditCardGrid';
import AIChatSidebar from '@/components/AiChatSidebar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Compare = () => {
  const dispatch = useDispatch();
  const { cards, filteredCards, selectedForComparison } = useSelector((state: RootState) => state.creditCards);
  const filters = useSelector((state: RootState) => state.filters);
  const [showComparison, setShowComparison] = useState(false);

  // console.log(cards);
  // console.log(filters);

  useEffect(() => {
    let filtered = cards.filter((card) => {
      // Bank filter
      if (filters.bank && card.bank !== filters.bank) return false;
      
      // Category filter
      if (filters.category && card.category !== filters.category) return false;
      
      // Salary filter
      if (card.eligibility.minSalary > filters.minSalary && filters.minSalary > 0) return false;
      
      // Annual fee filter
      if (card.annualFee > filters.maxAnnualFee) return false;
      
      // Lounge access filter
      if (filters.loungeAccess !== null && card.loungeAccess !== filters.loungeAccess) return false;
      
      // Fuel surcharge filter
      if (filters.fuelSurcharge !== null && card.fuelSurcharge !== filters.fuelSurcharge) return false;
      
      return true;
    });

    // Apply sorting
    filtered = filtered.sort((a, b) => {
      const aValue = (filters.sortBy === 'name') ? a[filters.sortBy].toLowerCase() : a[filters.sortBy];
      const bValue = (filters.sortBy === 'name') ? b[filters.sortBy].toLowerCase() : b[filters.sortBy];
      
      if (filters.sortOrder === 'asc') {
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

  return (
    <div className="min-h-screen bg-[#167d9c1a]">
      <Header />
      <div className="flex">
        <div className="w-80 bg-white/75 border-r border-gray-200 min-h-screen  shadow-2xl">
          <FilterSidebar />
        </div>
         {/* Main Content */}
        <div className="flex-1">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-banking-text">
                  Credit Card Comparison
                </h1>
                <p className="text-gray-600 mt-1">
                  {filteredCards.length} cards match your criteria
                </p>
              </div>

              {selectedForComparison.length > 0 && (
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="bg-primary text-white">
                    {selectedForComparison.length} selected
                  </Badge>
                  <Button 
                    onClick={() => setShowComparison(true)}
                    className="banking-button-primary"
                  >
                    Compare Selected Cards
                  </Button>
                </div>
              )}

            </div>
            <CreditCardGrid cards={filteredCards} />
          </div>
        </div>
        <AIChatSidebar />
      </div>
      <ComparisonModal 
        isOpen={showComparison} 
        onClose={() => setShowComparison(false)} 
      />
    </div>
  )
}
export default Compare;
