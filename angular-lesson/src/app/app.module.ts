import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MoviesComponent } from './movies/movies.component';
import { MovieRatingComponent } from './movie-rating/movie-rating.component';  
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieRatingComponent
  ],
  imports: [
    BrowserModule,FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
