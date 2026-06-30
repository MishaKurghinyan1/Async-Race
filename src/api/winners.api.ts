import { api } from './client';
import type { Winner, FetchWinnersResponse } from '@/types/winners.types';

export const fetchWinners = async (page: number, limit = 10): Promise<FetchWinnersResponse> => {
  const response = await api.get<Winner[]>('/winners', {
    params: {
      _page: page,
      _limit: limit,
    },
  });

  const totalCount = response.headers['x-total-count'];

  return {
    winners: response.data,
    totalCount: totalCount ? parseInt(totalCount as string, 10) : 0,
  };
};
