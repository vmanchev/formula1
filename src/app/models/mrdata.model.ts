import { StandingsTable } from './standings-table.model';
import { ConstructorTable } from './constructor-table.model';
import { CircuitTable } from './circuit-table.model';
import { DriverTable } from './driver-table.model';

export class MRData {
  StandingsTable?: StandingsTable;
  ConstructorTable?: ConstructorTable;
  CircuitTable?: CircuitTable;
  DriverTable?: DriverTable;
  limit: number;
  offset: number;
  series: string;
  total: number;
  url: string;
  xmlns: string;
}
