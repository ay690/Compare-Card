/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector, useDispatch } from 'react-redux';
import { type RootState } from '@/store/store';
import { removeFromComparison, clearComparison } from '@/store/slices/creditCardSlice';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { X } from 'lucide-react';

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
      <DialogContent className="max-w-full sm:max-w-4xl lg:max-w-6xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <span>Credit Card Comparison</span>
            <Button variant="outline" onClick={handleClearAll} size="sm" className="cursor-pointer">
              Clear All
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Cards Overview */}
          <div className="overflow-x-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-max">
              {selectedCards.map((card) => (
                <div key={card.id} className="relative banking-card w-64 p-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 h-6 w-6 p-0 cursor-pointer"
                    onClick={() => handleRemoveCard(card.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  <div className="text-center">
                    <h3 className="font-semibold text-banking-text mb-1 truncate">{card.name}</h3>
                    <p className="text-sm text-gray-600 mb-2 truncate">{card.bank}</p>
                    <Badge variant="secondary" className="bg-banking-blue/10 text-banking-blue">
                      {card.category}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-32">Feature</TableHead>
                  {selectedCards.map((card) => (
                    <TableHead key={card.id} className="text-center min-w-[120px]">
                      <div>
                        <div className="font-semibold truncate">{card.name}</div>
                        <div className="text-xs text-gray-500 truncate">{card.bank}</div>
                      </div>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { label: 'Rating', render: (card: any) => (<span>⭐{" "}{card.rating}</span>) },
                  { label: 'Annual Fee', render: (card: any) => (<span>₹ {" "} {card.annualFee.toLocaleString()}</span>) },
                  { label: 'Joining Fee', render: (card: any) => (<span >₹ {" "} {card.joiningFee.toLocaleString()}</span>) },
                  { label: 'Cashback Rate', render: (card: any) => (<span className="text-green-600 font-medium">+{card.cashbackRate}%</span>) },
                  { label: 'Min Salary', render: (card: any) => (<span>₹ {" "}{(card.eligibility.minSalary / 100000).toFixed(1)}L</span>) },
                  { label: 'Lounge Access', render: (card: any) => card.loungeAccess ? <span className="text-success">✓ Yes</span> : <span className="text-gray-400">✗ No</span> },
                  { label: 'Fuel Surcharge Waiver', render: (card: any) => card.fuelSurcharge ? <span className="text-success">✓ Yes</span> : <span className="text-gray-400">✗ No</span> },
                  { label: 'Key Benefits', render: (card: any) => (<div className="space-y-1">{card.benefits.slice(0,2).map((b: any, i: number) => (<div key={i} className="text-xs text-gray-600 truncate">{b}</div>))}</div>) }
                ].map(({ label, render }) => (
                  <TableRow key={label}>
                    <TableCell className="font-medium">{label}</TableCell>
                    {selectedCards.map(card => (
                      <TableCell key={card.id} className="text-center whitespace-normal">
                        {render(card)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComparisonModal;

