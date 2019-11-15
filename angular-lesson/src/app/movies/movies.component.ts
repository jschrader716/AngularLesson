import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import {AIRINGMOVIES} from '../models/airing-movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  myMovie: Movie = {
    name: 'Jaws',
    rating: 8
  }
  movies = AIRINGMOVIES;
  selectedMovie: Movie;

  constructor() { }

  ngOnInit() {
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }
}
