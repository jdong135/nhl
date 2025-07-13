// NHL Team Abbreviations
export type TeamAbbreviation = 
  | 'ANA' | 'ARI' | 'BOS' | 'BUF' | 'CAR' | 'CBJ' | 'CGY' | 'CHI' 
  | 'COL' | 'DAL' | 'DET' | 'EDM' | 'FLA' | 'LAK' | 'MIN' | 'MTL' 
  | 'NJD' | 'NSH' | 'NYI' | 'NYR' | 'OTT' | 'PHI' | 'PIT' | 'SEA' 
  | 'SJS' | 'STL' | 'TBL' | 'TOR' | 'VAN' | 'VGK' | 'WSH' | 'WPG'
  | 'UTA';

// NHL Season ID format: <seasonStartYear><seasonEndYear> (e.g., 20232024 for 2023-24 season)
export type SeasonId = `${number}${number}${number}${number}${number}${number}${number}${number}` | 'now';

// /club-schedule-season response type
export interface ClubTeamInfo {
  id: number;
  commonName: {
    default: string;
    fr?: string;
  };
  placeName: {
    default: string;
    fr?: string;
  };
  placeNameWithPreposition: {
    default: string;
    fr?: string;
  };
  abbrev: string;
  logo: string;
  darkLogo: string;
  awaySplitSquad?: boolean;
  homeSplitSquad?: boolean;
  radioLink: string;
}

export interface ClubGame {
  id: number;
  season: number;
  gameType: number;
  gameDate: string;
  venue: {
    default: string;
  };
  neutralSite: boolean;
  startTimeUTC: string;
  easternUTCOffset: string;
  venueUTCOffset: string;
  venueTimezone: string;
  gameState: string;
  gameScheduleState: string;
  tvBroadcasts: any[]; // Empty array in the example
  awayTeam: ClubTeamInfo;
  homeTeam: ClubTeamInfo;
  periodDescriptor: {
    maxRegulationPeriods: number;
  };
  ticketsLink: string;
  ticketsLinkFr: string;
  gameCenterLink: string;
}

export interface ClubScheduleResponse {
  previousSeason: number;
  currentSeason: number;
  clubTimezone: string;
  clubUTCOffset: string;
  games: ClubGame[];
}

// /schedule response type
export interface TVBroadcast {
  id: number;
  market: string;
  countryCode: string;
  network: string;
  sequenceNumber: number;
}

export interface TeamInfo {
  id: number;
  commonName: {
    default: string;
    fr?: string;
  };
  placeName: {
    default: string;
    fr?: string;
  };
  placeNameWithPreposition: {
    default: string;
    fr?: string;
  };
  abbrev: string;
  logo: string;
  darkLogo: string;
  awaySplitSquad?: boolean;
  homeSplitSquad?: boolean;
  score: number;
}

export interface PeriodDescriptor {
  number: number;
  periodType: string;
  maxRegulationPeriods: number;
}

export interface GameOutcome {
  lastPeriodType: string;
}

export interface Player {
  playerId: number;
  firstInitial: {
    default: string;
  };
  lastName: {
    default: string;
    cs?: string;
    fi?: string;
    sk?: string;
    sv?: string;
  };
}

export interface Venue {
  default: string;
  es?: string;
  fr?: string;
}

export interface Game {
  id: number;
  season: number;
  gameType: number;
  venue: Venue;
  neutralSite: boolean;
  startTimeUTC: string;
  easternUTCOffset: string;
  venueUTCOffset: string;
  venueTimezone: string;
  gameState: string;
  gameScheduleState: string;
  tvBroadcasts: TVBroadcast[];
  awayTeam: TeamInfo;
  homeTeam: TeamInfo;
  periodDescriptor: PeriodDescriptor;
  gameOutcome: GameOutcome;
  winningGoalie?: Player;
  winningGoalScorer?: Player;
  threeMinRecap?: string;
  threeMinRecapFr?: string;
  condensedGame?: string;
  condensedGameFr?: string;
  gameCenterLink: string;
}

export interface DatePromo {
  default: {
    text: string;
    secondaryText: string;
    url: string;
    logoText: string;
    lightLogoUrl: string;
    darkLogoUrl: string;
  };
  country: string;
}

export interface GameWeek {
  date: string;
  dayAbbrev: string;
  numberOfGames: number;
  datePromo: DatePromo[];
  games: Game[];
}

export interface ScheduleResponse {
  nextStartDate: string;
  previousStartDate: string;
  gameWeek: GameWeek[];
  preSeasonStartDate: string;
  regularSeasonStartDate: string;
  regularSeasonEndDate: string;
  playoffEndDate: string;
  numberOfGames: number;
} 