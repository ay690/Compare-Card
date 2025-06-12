import { useSelector } from 'react-redux';
import { type RootState } from '@/store/store';
import Header from '@/components/Header';

const Compare = () => {
  const { cards } = useSelector((state: RootState) => state.creditCards);
  const filters = useSelector((state: RootState) => state.filters);
  console.log(cards);
  console.log(filters);

  return (
    <div className="min-h-screen bg-[#167d9c1a]">
      <Header />
    </div>
  )
}
export default Compare;
