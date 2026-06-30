export interface Car {
  id: number;
  name: string;
  color: string;
}

export interface FetchCarsResponse {
  cars: Car[];
  totalCount: number;
}
