import axios from 'axios';
import { ScheduleResponse, ClubScheduleResponse, TeamAbbreviation, SeasonId } from './types';
import { isValidSeasonId } from './utils';

const BASE_URL = 'https://api-web.nhle.com/v1';

export async function getSchedule(date: Date): Promise<ScheduleResponse> {
    // Convert to YYYY-MM-DD format
    const formattedDate = date.toISOString().split('T')[0];
    const response = await axios.get<ScheduleResponse>(`${BASE_URL}/schedule/${formattedDate}`);
    return response.data;
}

export async function getClubSchedule(teamAbbrev: TeamAbbreviation, season: SeasonId | 'now'): Promise<ClubScheduleResponse> {
    if (!isValidSeasonId(season)) {
        throw new Error('Invalid season ID');
    }
    const response = await axios.get<ClubScheduleResponse>(`${BASE_URL}/club-schedule-season/${teamAbbrev}/${season}`);
    return response.data;
}