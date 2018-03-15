import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { ComponentsModule } from "../components/components.module";
import { PageNotFoundComponent } from "./notfound/notfound.component";
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from "./app/app.component";
import { RouterModule } from "@angular/router";
import { MatTableModule, MatSortModule } from "@angular/material";
import { MatchesComponent } from "./group/matches/matches.component";
import { PlayersComponent } from "./group/players/players.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MatchesComponent,
    PlayersComponent,
    PageNotFoundComponent
  ],
  imports: [
    ComponentsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    StoreModule,
    RouterModule
  ],
  exports: [
    AppComponent,
    MatchesComponent,
    PlayersComponent,
    HomeComponent,
    PageNotFoundComponent
  ]
})
export class SectionsModule { }
