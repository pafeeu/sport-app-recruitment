import {GamesResponse, TableResponse} from "./types.ts";

const API_URL = 'https://php74.appgo.pl/sport_api/api/public/api/';

export function getGames(page: number, onPage: number, orderDirection: 'asc' | 'desc',
                  orderBy: 'round' | 'date' | 'home_team' | 'away_team' | 'home_score' | 'away_score'): Promise<GamesResponse> {
    return fetch(API_URL + `games?page=${page}&onPage=${onPage}&orderDirection=${orderDirection}&orderBy=${orderBy}`).then(res => res.json());
}

export function getTable(): Promise<TableResponse> {
    return fetch(API_URL + 'table').then(res => {
    // throw new Error('test error');
        return res.json();
    });
}