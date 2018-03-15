import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

import { getUrl } from "../../app/remote";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromPromise';
import { CREATE_PLAYER, CreatePlayer, CreatePlayerSuccess, CreatePlayerFailure, GET_PLAYERS, GetPlayers, GetPlayersFailure, GetPlayersSuccess } from "../actions/players.action";
import { Player } from "../models/player.model";

@Injectable()
export class PlayerEffects {
    constructor(
        private http: HttpClient,
        private actions$: Actions,
    ) {}

    @Effect()
    createPlayer$ = this.actions$.ofType(CREATE_PLAYER)
        .pipe(
            switchMap((action: CreatePlayer) => {
                return this.http.post<Player>(getUrl('/groups/' + action.payload.groupId + '/players'), action.payload).pipe(
                    map(player => {
                        return new CreatePlayerSuccess(player);
                    }),
                    catchError(error => of(new CreatePlayerFailure(error)))
                );
            })
        );

    @Effect()
    getPlayers$ = this.actions$.ofType(GET_PLAYERS)
        .pipe(
            switchMap((action: GetPlayers) => {
                return this.http.get<Player[]>(getUrl('/groups/' + action.payload + '/players')).pipe(
                    map(players => {
                        return new GetPlayersSuccess(players);
                    }),
                    catchError(error => of(new GetPlayersFailure(error)))
                )
            })
        );
}