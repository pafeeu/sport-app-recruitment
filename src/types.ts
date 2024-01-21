export interface Team {
    id: number;
    name: string;
    image: string;
    created_at: string;
    updated_at: string;
}

export interface Game {
    away_score: number;
    away_team: string;
    away_team_object: Team;
    created_at: string;
    date: string;
    home_score: number;
    home_team: string;
    home_team_object: Team;
    id: number;
    round: number;
    updated_at: string;
    _date_object: Date;
}

export interface GamesResponse {
    data: Game[];
    page: number;
    pages: number;
    total: number;
}

export interface Rank {
    team: Team;
    points: number;
    goals_scored: number;
    goals_conceded: number;
    goals_ratio: number;
    games: number;
}

export type TableResponse = Rank[];
