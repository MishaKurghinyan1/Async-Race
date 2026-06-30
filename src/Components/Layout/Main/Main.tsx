import { Winners } from '../../Winners';
import { Garage } from '../../Garage';
import { useGetValue } from '@/store';

export function Main() {
  const value = useGetValue();
  return <main>{value ? <Garage /> : <Winners />}</main>;
}
