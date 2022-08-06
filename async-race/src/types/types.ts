export interface Car {
  name: string;
  color: string;
}

export interface CarWithId extends Car {
  id: number;
}

export type Cars = CarWithId[];

export interface Winner {
  id: number;
  wins: number;
  time: number;
}
