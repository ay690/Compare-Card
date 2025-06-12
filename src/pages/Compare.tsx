import { useSelector } from 'react-redux';
import { type RootState } from '@/store/store';

const Compare = () => {
  const { cards } = useSelector((state: RootState) => state.creditCards);
  const filters = useSelector((state: RootState) => state.filters);
  console.log(cards);
  console.log(filters);

  return (
    <div>
      Compare Page
    </div>
  )
}
export default Compare;
