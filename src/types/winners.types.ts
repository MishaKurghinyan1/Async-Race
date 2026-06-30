export interface Winner {
  id: 1;
  wins: 1;
  time: 10;
}

export interface FetchWinnersResponse {
  winners: Winner[];
  totalCount: number;
}
