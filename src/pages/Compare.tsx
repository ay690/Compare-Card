import { useSelector } from 'react-redux';
import { type RootState } from '@/store/store';
import Header from '@/components/Header';
import FilterSidebar from '@/components/FilterSidebar';

const Compare = () => {
  const { cards } = useSelector((state: RootState) => state.creditCards);
  const filters = useSelector((state: RootState) => state.filters);
  console.log(cards);
  console.log(filters);

  return (
    <div className="min-h-screen bg-[#167d9c1a]">
      <Header />
      <div className="flex">
        <div className="w-80 bg-white/75 border-r border-gray-200 min-h-screen  shadow-2xl">
          <FilterSidebar />
        </div>
      </div>
    </div>
  )
}
export default Compare;
