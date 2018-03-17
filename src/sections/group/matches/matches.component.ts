import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { map, switchMap, catchError } from 'rxjs/operators';
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { MatTableDataSource, MatSort } from '@angular/material';
import { DecimalPipe } from '@angular/common';
import { MasterState } from "../../../store";
import { GetMatches, CreateMatch } from "../../../store/actions/matches.action";

@Component({
    selector: 'matches',
    templateUrl: './matches.component.html',
    styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit, OnDestroy {
    
    groupId: string;
    matchesLoading: boolean;

    private matchesStateSubscription: Subscription;

    matchesDisplayedColumns = ['timestamp', 'player1', 'player2', 'winner'];
    matchesDataSource = new MatTableDataSource();

    @ViewChild(MatSort) matchesSort: MatSort;

    constructor(
        private store: Store<MasterState>,
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.groupId = this.route.snapshot.params.groupId;

        this.matchesStateSubscription = this.store.select(store => store.match).subscribe(matchState => {
            this.matchesDataSource.data = matchState.matches;
            this.matchesDataSource.sort = this.matchesSort;
            this.matchesLoading = false;
        });

        this.store.dispatch(new GetMatches(this.groupId));
        this.matchesLoading = true;
    }

    ngOnDestroy(): void {
        this.matchesStateSubscription.unsubscribe();
    }

    createMatch(player1, player2, winner) {
        this.store.dispatch(new CreateMatch({
            groupId: this.groupId,
            player1: player1,
            player2: player2,
            winner: winner
        }));
    }
}
