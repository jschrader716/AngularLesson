import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-sportsteams',
  templateUrl: './sportsteams.component.html',
  styleUrls: ['./sportsteams.component.css']
})
export class SportsteamsComponent implements OnInit {
  public movieName: string = "";
  public rating = "";

  constructor(private route: ActivatedRoute) {
    this.movieName = this.route.snapshot.queryParamMap.get('name');
    this.rating = this.route.snapshot.queryParamMap.get('rating');
    console.log(this.movieName);
    console.log(this.rating);
   }

  ngOnInit() {

  }
}
