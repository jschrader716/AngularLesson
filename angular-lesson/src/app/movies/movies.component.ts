import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

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

  constructor() { }

  ngOnInit() {
  }

}
