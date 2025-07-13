// Season validation and utilities
export function isValidSeasonId(season: string): boolean {
    if (season === 'now') return true;
    // Check if it's 8 digits
    if (!/^\d{8}$/.test(season)) return false;

    // Parse the years
    const startYear = parseInt(season.substring(0, 4));
    const endYear = parseInt(season.substring(4, 8));

    //   Ensure startYear is 1 year before endYear
return startYear === endYear - 1;
}