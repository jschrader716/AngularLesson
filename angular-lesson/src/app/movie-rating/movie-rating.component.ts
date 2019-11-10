import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../models/movie';


@Component({
  selector: 'app-movie-rating',
  templateUrl: './movie-rating.component.html',
  styleUrls: ['./movie-rating.component.css']
})
export class MovieRatingComponent implements OnInit {
  @Input() movie: Movie;
  
  constructor() { }

  ngOnInit() {
  }

}
