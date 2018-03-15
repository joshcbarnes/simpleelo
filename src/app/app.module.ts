import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { HomeComponent } from '../sections/home/home.component';
import { ComponentsModule } from '../components/components.module';
import { SectionsModule } from '../sections/sections.module';
import { PageNotFoundComponent } from '../sections/notfound/notfound.component';
import { reducers, effects } from '../store';
import { groupReducer } from '../store/reducers/group.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../sections/app/app.component';
import { PlayersComponent } from '../sections/group/players/players.component';
import { MatchesComponent } from '../sections/group/matches/matches.component';

const appRoutes: Routes = [
  {
    path: 'groups/:groupId/matches',
    component: MatchesComponent
  },
  {
    path: 'groups/:groupId/players',
    component: PlayersComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    HttpClientModule,
    BrowserModule,
    SectionsModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
