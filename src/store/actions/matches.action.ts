import { Action } from '@ngrx/store';
import { ActionWithPayload } from '.';
import { Match } from '../models/match.model';

export const CREATE_MATCH = '[MATCH] CREATE_MATCH';
export const CREATE_MATCH_SUCCESS = '[MATCH] CREATE_MATCH_SUCCESS';
export const CREATE_MATCH_FAILURE = '[MATCH] CREATE_MATCH_FAILURE';


export class CreateMatch implements ActionWithPayload<Match> {
    readonly type = CREATE_MATCH;

    constructor(public payload: Match) {}
}

export class CreateMatchSuccess implements ActionWithPayload<Match> {
    readonly type = CREATE_MATCH_SUCCESS;

    constructor(public payload: Match) {}
}

export class CreateMatchFailure implements ActionWithPayload<Error> {
    readonly type = CREATE_MATCH_FAILURE;

    constructor(public payload: Error) {}
}

export const GET_MATCHES = '[MATCH] GET_MATCHES';
export const GET_MATCHES_SUCCESS = '[MATCH] GET_MATCHES_SUCCESS';
export const GET_MATCHES_FAILURE = '[MATCH] GET_MATCHES_FAILURE';

export class GetMatches implements ActionWithPayload<string> {
    readonly type = GET_MATCHES;

    constructor(public payload: string) {}
}

export class GetMatchesSuccess implements ActionWithPayload<Match[]> {
    readonly type = GET_MATCHES_SUCCESS;

    constructor(public payload: Match[]) {}
}

export class GetMatchesFailure implements ActionWithPayload<Error> {
    readonly type = GET_MATCHES_FAILURE;

    constructor(public payload: Error) {}
}

export type Actions = CreateMatch | CreateMatchSuccess | CreateMatchFailure | GetMatches | GetMatchesSuccess | GetMatchesFailure;