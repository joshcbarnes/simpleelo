import { Action } from '@ngrx/store';
import { ActionWithPayload } from '.';
import { Player } from '../models/player.model';

export const CREATE_PLAYER = '[PLAYER] CREATE_PLAYER';
export const CREATE_PLAYER_SUCCESS = '[PLAYER] CREATE_PLAYER_SUCCESS';
export const CREATE_PLAYER_FAILURE = '[PLAYER] CREATE_PLAYER_FAILURE';


export class CreatePlayer implements ActionWithPayload<Player> {
    readonly type = CREATE_PLAYER;

    constructor(public payload: Player) {}
}

export class CreatePlayerSuccess implements ActionWithPayload<Player> {
    readonly type = CREATE_PLAYER_SUCCESS;

    constructor(public payload: Player) {}
}

export class CreatePlayerFailure implements ActionWithPayload<Error> {
    readonly type = CREATE_PLAYER_FAILURE;

    constructor(public payload: Error) {}
}

export const GET_PLAYERS = '[PLAYER] GET_PLAYERS';
export const GET_PLAYERS_SUCCESS = '[PLAYER] GET_PLAYERS_SUCCESS';
export const GET_PLAYERS_FAILURE = '[PLAYER] GET_PLAYERS_FAILURE';

export class GetPlayers implements ActionWithPayload<string> {
    readonly type = GET_PLAYERS;

    constructor(public payload: string) {}
}

export class GetPlayersSuccess implements ActionWithPayload<Player[]> {
    readonly type = GET_PLAYERS_SUCCESS;

    constructor(public payload: Player[]) {}
}

export class GetPlayersFailure implements ActionWithPayload<Error> {
    readonly type = GET_PLAYERS_FAILURE;

    constructor(public payload: Error) {}
}

export type Actions = CreatePlayer | CreatePlayerSuccess | CreatePlayerFailure | GetPlayers | GetPlayersSuccess | GetPlayersFailure;