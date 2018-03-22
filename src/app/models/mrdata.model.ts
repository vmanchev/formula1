import {StandingsTable} from './standings-table.model';

export class MRData {
  StandingsTable?: StandingsTable;
  limit: number;
  offset: number;
  series: string;
  total: number;
  url: string;
  xmlns: string;
}
