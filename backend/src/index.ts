import express, { Application, Request, Response } from 'express';
import { getClubSchedule, getSchedule } from './nhlService';
import { SeasonId, TeamAbbreviation } from './types';

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '3000', 10);

app.get('/schedule/:date', async (req: Request<{ date: string }>, res: Response) => {
    const dateParam = req.params.date;
    const date = new Date(dateParam);
    
    const schedule = await getSchedule(date);
    res.json(schedule);
});

app.get('/club-schedule-season/:teamAbbrev/:season', async (req: Request<{ teamAbbrev: TeamAbbreviation, season: SeasonId }>, res: Response) => {
    const { teamAbbrev, season } = req.params;
    const schedule = await getClubSchedule(teamAbbrev, season);
    res.json(schedule);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 