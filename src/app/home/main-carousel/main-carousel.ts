import { CommonModule } from '@angular/common';
import { homeCarouselData } from './../../../Data/maincarosuel';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-main-carousel',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './main-carousel.html',
  styleUrl: './main-carousel.css'
})
export class MainCarousel {
  carouselData: any

  currentSlide = 0;
  interval:any;

  // it is a  lifecycle hook in Angular.,components (and directives) go through a lifecycle: they are created, rendered, updated, and finally destroyed
  //When it is called:
  //  if your component receives data from its parent component via @Input() properties, those properties will have their initial values set by the time ngOnInit runs
  // It is called only once during the lifecycle of a component. It's not called again if the input properties change later. For changes to input properties, you'd use ngOnChanges.
  ngOnInit() {
    console.log('ngOnInit called. Component is ready!');

    //Perform initalize logic here
    this.carouselData = homeCarouselData;
    this.autoPlay();
  }

  autoPlay(){
    setInterval(()=>{
      this.nextSlide();
    },2000)
  }

  nextSlide(){
    this.currentSlide = (this.currentSlide+1) % this.carouselData.length;
  }
}
