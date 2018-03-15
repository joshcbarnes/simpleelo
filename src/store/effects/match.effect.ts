import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

import { getUrl } from "../../app/remote";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromPromise';
import { CREATE_MATCH, CreateMatch, CreateMatchSuccess, CreateMatchFailure, GET_MATCHES, GetMatches, GetMatchesFailure, GetMatchesSuccess } from "../actions/matches.action";
import { Match } from "../models/match.model";

@Injectable()
export class MatchEffects {
    constructor(
        private http: HttpClient,
        private actions$: Actions,
    ) {}

    @Effect()
    createMatch$ = this.actions$.ofType(CREATE_MATCH)
        .pipe(
            switchMap((action: CreateMatch) => {
                return this.http.post<Match>(getUrl('/groups/' + action.payload.groupId + '/matches'), action.payload).pipe(
                    map(match => {
                        return new CreateMatchSuccess(match);
                    }),
                    catchError(error => of(new CreateMatchFailure(error)))
                );
            })
        );

    @Effect()
    getMatchs$ = this.actions$.ofType(GET_MATCHES)
        .pipe(
            switchMap((action: GetMatches) => {
                return this.http.get<Match[]>(getUrl('/groups/' + action.payload + '/matches')).pipe(
                    map(matches => {
                        return new GetMatchesSuccess(matches);
                    }),
                    catchError(error => of(new GetMatchesFailure(error)))
                )
            })
        );
}