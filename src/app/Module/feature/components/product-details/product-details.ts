import { Component } from '@angular/core';
import { MaterialModule } from '../../../../material-module'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductReviewCard } from './product-review-card/product-review-card';
import { lehngacholiPage2 } from '../../../../../Data/Saree/lenghaCholiPage2';
import { ProductCard } from '../../../shared/components/product-card/product-card';
import { StarRating } from '../../../shared/components/star-rating/star-rating';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-details',
  imports: [CommonModule, MaterialModule, FormsModule, ProductReviewCard,ProductCard,StarRating],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {

  selectedSize: any;
  reviews = [1, 1, 1, 1, 1, 1];
  relatedProducts: any;
  constructor(private router:Router){}
  ngOnInit(){
    this.relatedProducts = lehngacholiPage2;
  }
  handleAddToCart() {
    console.log("Selected Size", this.selectedSize);
    this.router.navigate(['cart']) //it will redirect to the Cart component when i click on the handleAddToCart because     {path:"cart",component:Cart},
  }



}
