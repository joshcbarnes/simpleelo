import { Match } from "../models/match.model";
import { Actions, CREATE_MATCH, CREATE_MATCH_SUCCESS, CREATE_MATCH_FAILURE, GET_MATCHES, GET_MATCHES_SUCCESS, GET_MATCHES_FAILURE } from "../actions/matches.action";

export interface MatchState {
    matches: Match[],
    loading: boolean,
    error: any
}

const DEFAULT_STATE: MatchState = {
    matches: [],
    loading: false,
    error: null
};

export function matchReducer(state = DEFAULT_STATE, action: Actions): MatchState {
    switch (action.type) {
        case CREATE_MATCH: {
            return {
                ...state,
                loading: true
            };
        }

        case CREATE_MATCH_SUCCESS: {
            let currentMatchs = state.matches;
            return {
                ...state,
                loading: false,
                matches: currentMatchs.concat([action.payload])
            };
        }

        case CREATE_MATCH_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        }

        case GET_MATCHES: {
            return {
                ...state,
                loading: true
            };
        }

        case GET_MATCHES_SUCCESS: {
            return {
                ...state,
                loading: false,
                matches: action.payload
            };
        }

        case GET_MATCHES_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
    }

    return state;
}

export const getMatchs = store => store.match;