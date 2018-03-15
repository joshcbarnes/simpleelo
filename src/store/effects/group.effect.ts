import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

import { CREATE_GROUP, CreateGroupSuccess, CreateGroupFailure, CreateGroup, CREATE_GROUP_SUCCESS } from "../actions";
import { getUrl } from "../../app/remote";
import { Group } from "../models/group.model";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class GroupEffects {
    constructor(
        private http: HttpClient,
        private actions$: Actions,
        private router: Router
    ) {}

    @Effect()
    createGroup$ = this.actions$.ofType(CREATE_GROUP)
        .pipe(
            switchMap((action: CreateGroup) => {
                return this.http.post<Group>(getUrl('/groups'), action.payload).pipe(
                    map(group => {
                        this.router.navigate(['/groups', group.id, 'players']);
                        return new CreateGroupSuccess(group)
                    }),
                    catchError(error => of(new CreateGroupFailure(error)))
                );
            })
        );
}