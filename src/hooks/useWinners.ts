import { useQuery } from '@tanstack/react-query';
import { fetchWinners } from '@/api/winners.api';

export const useWinners = (page: number) => {
  return useQuery({
    queryKey: ['winners', page],
    queryFn: () => fetchWinners(page),
  });
};
