import { Jedi } from "./jedi";

export type Mission = {
  id: number;
  visited: number;
  deals: number;
  amount: number;
  date: string;
  jedi: Jedi;
};

export type MissionPage = {
  content?: Mission[];
  last: boolean;
  totalElements: number;
  totalPages: number;
  size?: number;
  number: number;
  first: boolean;
  numberOfElements?: number;
  empty?: boolean;
};

export type MissionSum = {
  jediName: string;
  sum: number;
};

export type MissionSuccess = {
  jediName: string;
  visited: number;
  deals: number;
};
