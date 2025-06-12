import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface CreditCard {
  id: string;
  name: string;
  bank: string;
  image: string;
  annualFee: number;
  joiningFee: number;
  rewards: string;
  features: string[];
  benefits: string[];
  eligibility: {
    minSalary: number;
    minAge: number;
    maxAge: number;
  };
  category: string;
  rating: number;
  cashbackRate: number;
  loungeAccess: boolean;
  fuelSurcharge: boolean;
  description: string;
}

interface CreditCardState {
  cards: CreditCard[];
  filteredCards: CreditCard[];
  loading: boolean;
  selectedCard: CreditCard | null;
}

const mockCards: CreditCard[] = [
  {
    id: '1',
    name: 'HDFC Regalia Credit Card',
    bank: 'HDFC Bank',
    image: '/placeholder.svg',
    annualFee: 2500,
    joiningFee: 2500,
    rewards: '4 Reward Points per ₹150 spent',
    features: ['Airport Lounge Access', 'Fuel Surcharge Waiver', 'Dining Offers'],
    benefits: ['12 complimentary airport lounge visits', '1% fuel surcharge waiver', 'Buy 1 Get 1 movie tickets'],
    eligibility: { minSalary: 300000, minAge: 21, maxAge: 60 },
    category: 'Premium',
    rating: 4.5,
    cashbackRate: 2.67,
    loungeAccess: true,
    fuelSurcharge: true,
    description: 'A premium lifestyle credit card with excellent rewards and benefits for frequent travelers.'
  },
  {
    id: '2',
    name: 'SBI SimplyCLICK Credit Card',
    bank: 'State Bank of India',
    image: '/placeholder.svg',
    annualFee: 499,
    joiningFee: 499,
    rewards: '10X Reward Points on online spends',
    features: ['Online Shopping Rewards', 'Movie Ticket Discounts', 'Dining Offers'],
    benefits: ['10X rewards on online shopping', '₹120 movie ticket discount', 'Annual fee waiver on ₹1L spend'],
    eligibility: { minSalary: 180000, minAge: 21, maxAge: 65 },
    category: 'Cashback',
    rating: 4.2,
    cashbackRate: 5.0,
    loungeAccess: false,
    fuelSurcharge: false,
    description: 'Perfect for online shoppers with attractive rewards on digital transactions.'
  },
  {
    id: '3',
    name: 'ICICI Amazon Pay Credit Card',
    bank: 'ICICI Bank',
    image: '/placeholder.svg',
    annualFee: 0,
    joiningFee: 0,
    rewards: '5% cashback on Amazon, 2% on others',
    features: ['Amazon Prime Benefits', 'No Annual Fee', 'Instant Digital Card'],
    benefits: ['5% unlimited cashback on Amazon', '2% cashback on bill payments', 'Free Amazon Prime membership'],
    eligibility: { minSalary: 240000, minAge: 23, maxAge: 58 },
    category: 'Cashback',
    rating: 4.7,
    cashbackRate: 5.0,
    loungeAccess: false,
    fuelSurcharge: false,
    description: 'Ideal for Amazon shoppers with no annual fee and excellent cashback rates.'
  },
  {
    id: '4',
    name: 'Axis Bank MY ZONE Credit Card',
    bank: 'Axis Bank',
    image: '/placeholder.svg',
    annualFee: 500,
    joiningFee: 500,
    rewards: '2X EDGE Reward Points',
    features: ['Student Friendly', 'Low Income Requirements', 'Digital Wallet Benefits'],
    benefits: ['Annual fee waiver on ₹50K spend', '2X rewards on online shopping', 'Welcome bonus worth ₹500'],
    eligibility: { minSalary: 150000, minAge: 18, maxAge: 65 },
    category: 'Entry Level',
    rating: 4.0,
    cashbackRate: 1.0,
    loungeAccess: false,
    fuelSurcharge: false,
    description: 'Perfect first credit card for young professionals and students.'
  },
  {
    id: '5',
    name: 'American Express Gold Card',
    bank: 'American Express',
    image: '/placeholder.svg',
    annualFee: 4500,
    joiningFee: 4500,
    rewards: '1000 bonus points monthly',
    features: ['Airport Lounge Access', 'Taj InnerCircle', 'Golf Privileges'],
    benefits: ['8 complimentary airport lounge visits', 'Taj Hotel benefits', 'Dining and travel rewards'],
    eligibility: { minSalary: 600000, minAge: 21, maxAge: 65 },
    category: 'Premium',
    rating: 4.3,
    cashbackRate: 3.3,
    loungeAccess: true,
    fuelSurcharge: true,
    description: 'Premium card with exclusive lifestyle benefits and rewards for high spenders.'
  }
];

const initialState: CreditCardState = {
  cards: mockCards,
  filteredCards: mockCards,
  loading: false,
  selectedCard: null,
};

const creditCardSlice = createSlice({
  name: 'creditCards',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<CreditCard[]>) => {
      state.cards = action.payload;
      state.filteredCards = action.payload;
    },
    setFilteredCards: (state, action: PayloadAction<CreditCard[]>) => {
      state.filteredCards = action.payload;
    },
    setSelectedCard: (state, action: PayloadAction<CreditCard | null>) => {
      state.selectedCard = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setCards, setFilteredCards, setSelectedCard, setLoading } = creditCardSlice.actions;
export default creditCardSlice.reducer;
