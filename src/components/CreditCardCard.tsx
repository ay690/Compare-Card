import { type CreditCard } from "@/store/slices/creditCardSlice";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, IndianRupee } from "lucide-react";

interface CreditCardCardProps {
  card: CreditCard;
}

const CreditCardCard = ({ card }: CreditCardCardProps) => {
  return (
    <div className="banking-card ">
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
          variant="outline"
          className="flex-1 text-sm cursor-pointer transition-colors duration-200 text-white hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #F39C12 0%, #F1C40F 100%)",
          }}
        >
          Compare
        </Button>
        <Button
          className="flex-1 text-sm cursor-pointer transition-colors duration-200 text-white hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #1B4F72 0%, #2E86AB 100%)",
          }}
        >
          Apply Now
        </Button>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-500 line-clamp-2">{card.description}</p>
      </div>
    </div>
  );
};

export default CreditCardCard;
