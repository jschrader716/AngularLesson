import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { AIRINGMOVIES } from '../models/airing-movies';
import { CalculatorService } from '../services/calculator.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
  public newMovieName = '';
  public ratingAverage: number;
  public highestRating: number;
  public lowestRating: number;

  myMovie: Movie = {
    name: 'Jaws',
    rating: 8
  }

  public movies = AIRINGMOVIES;
  public selectedMovie: Movie;

  constructor(private calculatorService: CalculatorService, private router: Router) { }

  ngOnInit() {
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  displayMovieName(newMovie) {
    this.newMovieName = newMovie;
    this.movies.push({name:newMovie, rating: 8});
  }

  calcAverage() {
    this.ratingAverage = this.calculatorService.calcAverage(this.movies);
  }

  getHighestRating() {
    this.highestRating = this.calculatorService.getHighestRating(this.movies);
  }

  getLowestRating() {
    this.lowestRating = this.calculatorService.getLowestRating(this.movies);
  }

  navigateToSports() {
    var coolSportsMovie = {name: 'Friday Night Lights', rating: 2.3};
    this.router.navigate(['/sports'], {queryParams: coolSportsMovie});
  }
}
