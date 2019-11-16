import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MoviesComponent } from './movies/movies.component';
import { MovieRatingComponent } from './movie-rating/movie-rating.component';  
import { SportsteamsComponent } from './sportsteams/sportsteams.component';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'sports', component: SportsteamsComponent },
  { path: 'movies', component: MoviesComponent },
  { path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
  { path: '**', component: MoviesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieRatingComponent,
    SportsteamsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
