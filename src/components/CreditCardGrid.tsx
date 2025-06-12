import { type CreditCard } from '@/store/slices/creditCardSlice';
import CreditCardCard from './CreditCardCard';

interface CreditCardGridProps {
  cards: CreditCard[];
}

const CreditCardGrid = ({ cards }: CreditCardGridProps) => {
  if (cards.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-banking-text mb-2">No cards found</h3>
        <p className="text-gray-600">Try adjusting your filters or search criteria</p>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {cards.map((card) => (
        <CreditCardCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CreditCardGrid;
