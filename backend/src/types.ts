// NHL API Response Types
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