import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  

import { AppComponent } from './app.component';
<<<<<<< Updated upstream

@NgModule({
  declarations: [
    AppComponent
=======
import { MoviesComponent } from './movies/movies.component';
import { MovieRatingComponent } from './movie-rating/movie-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieRatingComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
