import { Component, Input } from '@angular/core';
import { HomeProductCard } from "../home-product-card/home-product-card";
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-product-slider',
  imports: [CommonModule,HomeProductCard],
  templateUrl: './product-slider.html',
  styleUrl: './product-slider.css'
})
export class ProductSlider {
  // in angular we take input like this
 @Input() title:any
 @Input() products:any

 ngOnInit() {
    // console.log(`Slider for: ${this.title}`);
    // console.log('Products received:', this.products);
  }
}
