import axios from 'axios';
import { ScheduleResponse } from './types';

const BASE_URL = 'https://api-web.nhle.com/v1';

export async function getSchedule(date: Date): Promise<ScheduleResponse> {
    // Convert to YYYY-MM-DD format
    const formattedDate = date.toISOString().split('T')[0];
    const response = await axios.get<ScheduleResponse>(`${BASE_URL}/schedule/${formattedDate}`);
    return response.data;
}