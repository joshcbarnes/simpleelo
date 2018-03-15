import { Player } from "../models/player.model";
import { Actions, CREATE_PLAYER, CREATE_PLAYER_SUCCESS, CREATE_PLAYER_FAILURE, GET_PLAYERS, GET_PLAYERS_SUCCESS, GET_PLAYERS_FAILURE } from "../actions/players.action";

export interface PlayerState {
    players: Player[],
    loading: boolean,
    error: any
}

const DEFAULT_STATE: PlayerState = {
    players: [],
    loading: false,
    error: null
};

export function playerReducer(state = DEFAULT_STATE, action: Actions): PlayerState {
    switch (action.type) {
        case CREATE_PLAYER: {
            return {
                ...state,
                loading: true
            };
        }

        case CREATE_PLAYER_SUCCESS: {
            let currentPlayers = state.players;
            return {
                ...state,
                loading: false,
                players: currentPlayers.concat([action.payload])
            };
        }

        case CREATE_PLAYER_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        }

        case GET_PLAYERS: {
            return {
                ...state,
                loading: true
            };
        }

        case GET_PLAYERS_SUCCESS: {
            return {
                ...state,
                loading: false,
                players: action.payload
            };
        }

        case GET_PLAYERS_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
    }

    return state;
}

export const getPlayers = store => store.player;