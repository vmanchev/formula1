import { StandingsTable } from './standings-table.model';
import { ConstructorTable } from './constructor-table.model';
import { CircuitTable } from './circuit-table.model';

export class MRData {
  StandingsTable?: StandingsTable;
  ConstructorTable?: ConstructorTable;
  CircuitTable?: CircuitTable;
  limit: number;
  offset: number;
  series: string;
  total: number;
  url: string;
  xmlns: string;
}
