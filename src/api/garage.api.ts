import { api } from './client';
import type { Car, FetchCarsResponse } from '@/types/car.types';

export const fetchCars = async (page: number, limit = 7): Promise<FetchCarsResponse> => {
  const response = await api.get<Car[]>('/garage', {
    params: {
      _page: page,
      _limit: limit,
    },
  });

  const totalCount = response.headers['x-total-count'];

  return {
    cars: response.data,
    totalCount: totalCount ? parseInt(totalCount as string, 10) : 0,
  };
};
