import { useSelector } from 'react-redux';
import { type RootState } from '@/store/store';

const Compare = () => {
  const { cards } = useSelector((state: RootState) => state.creditCards);
  console.log(cards);

  return (
    <div>
      Compare Page
    </div>
  )
}
export default Compare
