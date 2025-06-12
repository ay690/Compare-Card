import { useSelector, useDispatch } from 'react-redux';
import { type RootState } from '@/store/store';
import { removeFromComparison, clearComparison } from '@/store/slices/creditCardSlice';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { X, IndianRupee, Star } from 'lucide-react';

interface ComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComparisonModal = ({ isOpen, onClose }: ComparisonModalProps) => {
  const dispatch = useDispatch();
  const { cards, selectedForComparison } = useSelector((state: RootState) => state.creditCards);

  const selectedCards = cards.filter(card => selectedForComparison.includes(card.id));

  const handleRemoveCard = (cardId: string) => {
    dispatch(removeFromComparison(cardId));
  };

  const handleClearAll = () => {
    dispatch(clearComparison());
    onClose();
  };

  if (selectedCards.length === 0) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            Credit Card Comparison
            <Button variant="outline" onClick={handleClearAll} size="sm">
              Clear All
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Cards Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedCards.map((card) => (
              <div key={card.id} className="relative banking-card">
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 h-6 w-6 p-0"
                  onClick={() => handleRemoveCard(card.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
                <div className="text-center">
                  <h3 className="font-semibold text-banking-text mb-1">{card.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{card.bank}</p>
                  <Badge variant="secondary" className="bg-banking-blue/10 text-banking-blue">
                    {card.category}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-40">Feature</TableHead>
                  {selectedCards.map((card) => (
                    <TableHead key={card.id} className="text-center min-w-48">
                      <div>
                        <div className="font-semibold">{card.name}</div>
                        <div className="text-xs text-gray-500">{card.bank}</div>
                      </div>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Rating</TableCell>
                  {selectedCards.map((card) => (
                    <TableCell key={card.id} className="text-center">
                      <div className="flex items-center justify-center">
                        <Star className="h-4 w-4 text-secondary mr-1" />
                        <span className="font-medium">{card.rating}</span>
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Annual Fee</TableCell>
                  {selectedCards.map((card) => (
                    <TableCell key={card.id} className="text-center">
                      <div className="flex items-center justify-center">
                        <IndianRupee className="h-3 w-3" />
                        <span>{card.annualFee.toLocaleString()}</span>
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Joining Fee</TableCell>
                  {selectedCards.map((card) => (
                    <TableCell key={card.id} className="text-center">
                      <div className="flex items-center justify-center">
                        <IndianRupee className="h-3 w-3" />
                        <span>{card.joiningFee.toLocaleString()}</span>
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Cashback Rate</TableCell>
                  {selectedCards.map((card) => (
                    <TableCell key={card.id} className="text-center">
                      <span className="text-success font-medium">{card.cashbackRate}%</span>
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Min Salary</TableCell>
                  {selectedCards.map((card) => (
                    <TableCell key={card.id} className="text-center">
                      <div className="flex items-center justify-center">
                        <IndianRupee className="h-3 w-3" />
                        <span>{(card.eligibility.minSalary / 100000).toFixed(1)}L</span>
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Lounge Access</TableCell>
                  {selectedCards.map((card) => (
                    <TableCell key={card.id} className="text-center">
                      <span className={card.loungeAccess ? "text-success" : "text-gray-400"}>
                        {card.loungeAccess ? "✓ Yes" : "✗ No"}
                      </span>
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Fuel Surcharge Waiver</TableCell>
                  {selectedCards.map((card) => (
                    <TableCell key={card.id} className="text-center">
                      <span className={card.fuelSurcharge ? "text-success" : "text-gray-400"}>
                        {card.fuelSurcharge ? "✓ Yes" : "✗ No"}
                      </span>
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Key Benefits</TableCell>
                  {selectedCards.map((card) => (
                    <TableCell key={card.id} className="text-center">
                      <div className="space-y-1">
                        {card.benefits.slice(0, 2).map((benefit, index) => (
                          <div key={index} className="text-xs text-gray-600">{benefit}</div>
                        ))}
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComparisonModal;