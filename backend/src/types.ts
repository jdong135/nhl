// NHL Team Abbreviations
export type TeamAbbreviation = 
  | 'ANA' | 'ARI' | 'BOS' | 'BUF' | 'CAR' | 'CBJ' | 'CGY' | 'CHI' 
  | 'COL' | 'DAL' | 'DET' | 'EDM' | 'FLA' | 'LAK' | 'MIN' | 'MTL' 
  | 'NJD' | 'NSH' | 'NYI' | 'NYR' | 'OTT' | 'PHI' | 'PIT' | 'SEA' 
  | 'SJS' | 'STL' | 'TBL' | 'TOR' | 'VAN' | 'VGK' | 'WSH' | 'WPG'
  | 'UTA';

// NHL Season ID format: <seasonStartYear><seasonEndYear> (e.g., 20232024 for 2023-24 season)
export type SeasonId = `${number}${number}${number}${number}${number}${number}${number}${number}` | 'now';

// Common base types
export interface LocalizedText {
  default: string;
  fr?: string;
}

export interface BaseTeamInfo {
  id: number;
  commonName: LocalizedText;
  placeName: LocalizedText;
  placeNameWithPreposition: LocalizedText;
  abbrev: string;
  logo: string;
  darkLogo: string;
  awaySplitSquad?: boolean;
  homeSplitSquad?: boolean;
}

export interface BaseVenue {
  default: string;
  es?: string;
  fr?: string;
}

export interface BaseGame {
  id: number;
  season: number;
  gameType: number;
  neutralSite: boolean;
  startTimeUTC: string;
  easternUTCOffset: string;
  venueUTCOffset: string;
  venueTimezone: string;
  gameState: string;
  gameScheduleState: string;
  gameCenterLink: string;
}

// TV Broadcast types
export interface TVBroadcast {
  id: number;
  market: string;
  countryCode: string;
  network: string;
  sequenceNumber: number;
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

export interface GameOutcome {
  lastPeriodType: string;
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

export interface ClubTeamInfo extends BaseTeamInfo {
  radioLink: string;
}

export interface ClubGame extends BaseGame {
  gameDate: string;
  venue: {
    default: string;
  };
  tvBroadcasts: any[]; // Empty array in the example
  awayTeam: ClubTeamInfo;
  homeTeam: ClubTeamInfo;
  periodDescriptor: {
    maxRegulationPeriods: number;
  };
  ticketsLink: string;
  ticketsLinkFr: string;
}

export interface ClubScheduleResponse {
  previousSeason: number;
  currentSeason: number;
  clubTimezone: string;
  clubUTCOffset: string;
  games: ClubGame[];
}

export interface TeamInfo extends BaseTeamInfo {
  score: number;
}

export interface PeriodDescriptor {
  number: number;
  periodType: string;
  maxRegulationPeriods: number;
}

export interface Game extends BaseGame {
  venue: BaseVenue;
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