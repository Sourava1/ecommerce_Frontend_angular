import { Component } from '@angular/core';
import { MaterialModule } from "../../../../material-module";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-star-rating',
  imports: [ MaterialModule,CommonModule],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css'
})
export class StarRating {

  maxRating = 5;
  initialRating = 2;

  stars:any;
  currentRating = 0;

  constructor(){
    this.stars = Array(this.maxRating).fill(0).map((__,i)=>i+1);
    this.currentRating = this.initialRating || 0;
  }

  rate(rating:number){
    this.currentRating = rating;
  }
}
