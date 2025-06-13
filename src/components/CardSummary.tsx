import { useState, useEffect } from 'react';
import { type CreditCard } from '@/store/slices/creditCardSlice';
import { aiService } from '@/utils/aiService';
import { Skeleton } from '@/components/ui/skeleton';

interface CardSummaryProps {
  card: CreditCard;
  apiKey?: string;
}

const CardSummary = ({ card, apiKey }: CardSummaryProps) => {
  const [summary, setSummary] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateSummary = async () => {
      setLoading(true);
      if (apiKey) {
        aiService.setApiKey(apiKey);
      }
      
      try {
        const aiSummary = await aiService.generateCardSummary(card);
        setSummary(aiSummary);
      } catch (error) {
        console.error('Error generating summary:', error);
        setSummary(card.description);
      } finally {
        setLoading(false);
      }
    };

    generateSummary();
  }, [card, apiKey]);

  if (loading) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-3/4" />
      </div>
    );
  }

  return (
    <p className="text-xs text-gray-600 line-clamp-3">{summary}</p>
  );
};

export default CardSummary;