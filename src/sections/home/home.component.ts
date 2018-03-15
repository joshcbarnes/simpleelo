import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as foo from '../../store';
import { GroupState, getGroup } from '../../store/reducers/group.reducer';
import { Group } from '../../store/models/group.model';
import { CreateGroup } from '../../store/actions/group.action';
import { MasterState } from '../../store';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private loadingSubscription: Subscription;

  group$: Observable<GroupState>;

  constructor(
    private store: Store<MasterState>,
    private router: Router
  ) {
  }

  createGroup(name: string) {
    this.store.dispatch(new CreateGroup({
      name: name
    }));
  }

  ngOnInit() {
    this.group$ = this.store.select(getGroup);
  }
}
