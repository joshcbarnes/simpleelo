import { ActionReducerMap, ActionReducer } from "@ngrx/store";
import { GroupState, groupReducer } from "./group.reducer";
import { PlayerState, playerReducer } from "./player.reducer";
import { MatchState, matchReducer } from "./match.reducer";

export interface MasterState {
    group: GroupState,
    player: PlayerState,
    match: MatchState
}

export const reducers: ActionReducerMap<MasterState> = {
    group: groupReducer,
    player: playerReducer,
    match: matchReducer
};