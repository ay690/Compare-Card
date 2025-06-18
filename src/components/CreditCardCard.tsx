import {
  type CreditCard,
  addToComparison,
  removeFromComparison,
} from "@/store/slices/creditCardSlice";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, IndianRupee, ExternalLink } from "lucide-react";
import { type RootState } from "@/store/store";
import { toast } from "sonner";
import { useSelector, useDispatch } from "react-redux";
import CardSummary from "./CardSummary";
import { motion } from "framer-motion";

interface CreditCardCardProps {
  card: CreditCard;
}

const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const CreditCardCard = ({ card }: CreditCardCardProps) => {
  const dispatch = useDispatch();
  const { selectedForComparison } = useSelector(
    (state: RootState) => state.creditCards
  );

  const isSelected = selectedForComparison.includes(card.id);

  const handleCompareClick = () => {
    if (isSelected) {
      dispatch(removeFromComparison(card.id));
      toast("Card removed from comparison", {
        description: `${card.name} has been removed from comparison.`,
      });
    } else {
      if (selectedForComparison.length >= 3) {
        toast.error("Comparison limit reached", {
          description: "You can compare up to 3 cards at a time.",
        });
        return;
      }
      dispatch(addToComparison(card.id));
      toast("Card added to comparison", {
        description: `${card.name} has been added to comparison.`,
      });
    }
  };

  const handleApplyNow = () => {

    console.log(`User applying for ${card.name} from ${card.bank}`);

    toast("Application Started", {
        description: `Redirecting to ${card.bank} for ${card.name} application...`,
      });

      const bankWebsites = {
        'HDFC Bank': 'https://www.hdfcbank.com/personal/pay/cards/credit-cards',
        'State Bank of India': 'https://www.onlinesbi.sbi/sbicollect/icollecthome.htm',
        'ICICI Bank': 'https://www.icicibank.com/personal-banking/cards/credit-card',
        'Axis Bank': 'https://www.axisbank.com/retail/cards/credit-card',
        'American Express': 'https://www.americanexpress.com/in/'
      }

      const bankUrl = bankWebsites[card.bank as keyof typeof bankWebsites];

      setTimeout(() => {
        window.open(bankUrl, '_blank', 'noopener, noreferrer');
      }, 2000);
  }

  return (
    <motion.div
      className="banking-card"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-banking-text mb-1">
            {card.name}
          </h3>
          <p className="text-sm text-gray-600">{card.bank}</p>
        </div>
        <div className="flex items-center">
          <Star className="h-4 w-4 text-yellow-400 mr-1" />
          <span className="font-medium">{card.rating}</span>
        </div>
      </div>

      <div className="mb-4">
        <Badge variant="secondary" className="bg-blue-400/20 text-banking-blue">
          {card.category}
        </Badge>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Annual Fee</span>
          <span className="font-medium flex items-center">
            <IndianRupee className="h-3 w-3" />
            {card.annualFee.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Cashback Rate</span>
          <span className="font-medium text-green-600">
            +{card.cashbackRate}%
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Min Salary</span>
          <span className="font-medium flex items-center">
            <IndianRupee className="h-3 w-3" />
            {(card.eligibility.minSalary / 100000).toFixed(1)}L
          </span>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-medium text-banking-text mb-2">
          Key Benefits
        </h4>
        <div className="space-y-1">
          {card.benefits.slice(0, 3).map((benefit, index) => (
            <div key={index} className="text-xs text-gray-600 flex items-start">
              <div className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
              {benefit}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          variant={isSelected ? "default" : "outline"}
          className="flex-1 text-sm cursor-pointer transition-colors duration-200 text-white hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #F39C12 0%, #F1C40F 100%)",
          }}
          onClick={handleCompareClick}
        >
          {isSelected ? "Remove" : "Compare"}
        </Button>
        <Button
          className="flex-1 text-sm cursor-pointer transition-colors duration-200 text-white hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #1B4F72 0%, #2E86AB 100%)",
          }}
          onClick={handleApplyNow}
        >
          Apply Now
          <ExternalLink className="h-3 w-3"/>
        </Button>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-500 line-clamp-2">{card.description}</p>
      </div>

      <div className="pt-4 border-t border-gray-100">
        <div className="mb-2">
          <h5 className="text-xs font-medium text-banking-text mb-1">
            AI Summary
          </h5>
        </div>
        <CardSummary card={card} />
      </div>
    </motion.div>
  );
};

export default CreditCardCard;

