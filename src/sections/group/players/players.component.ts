import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { map, switchMap, catchError } from 'rxjs/operators';
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { MatTableDataSource, MatSort } from '@angular/material';
import { DecimalPipe } from '@angular/common';
import { MasterState } from "../../../store";
import { CreatePlayer, GetPlayers } from "../../../store/actions/players.action";

@Component({
    selector: 'players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit, OnDestroy {
    
    groupId: string;
    playersLoading: boolean;

    private playersStateSubscription: Subscription;

    private playersDisplayedColumns = ['email', 'elo'];
    private playersDataSource = new MatTableDataSource();

    @ViewChild(MatSort) playersSort: MatSort;

    constructor(
        private store: Store<MasterState>,
        private route: ActivatedRoute,
    ) {}

    createPlayer(name) {
        this.store.dispatch(new CreatePlayer({
            groupId: this.groupId,
            email: name
        }));
    }

    ngOnInit(): void {
        this.groupId = this.route.snapshot.params.groupId;
        
        this.playersStateSubscription = this.store.select(store => store.player).subscribe(playerState => {
            this.playersDataSource.data = playerState.players;
            this.playersDataSource.sort = this.playersSort;
            this.playersLoading = false;
        });
        
        this.store.dispatch(new GetPlayers(this.groupId));
        this.playersLoading = true;
    }

    ngOnDestroy(): void {
        this.playersStateSubscription.unsubscribe();
    }
}
