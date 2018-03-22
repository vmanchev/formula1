import { StandingsTable } from './standings-table.model';
import { ConstructorTable } from './constructor-table.model';

export class MRData {
  StandingsTable?: StandingsTable;
  ConstructorTable?: ConstructorTable;
  limit: number;
  offset: number;
  series: string;
  total: number;
  url: string;
  xmlns: string;
}
