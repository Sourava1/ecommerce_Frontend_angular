import { Component } from '@angular/core';
import { CartItem } from "../../../shared/components/cart-item/cart-item";
import { CommonModule } from '@angular/common';
import { MatDivider } from "@angular/material/divider";
import { MaterialModule } from '../../../../material-module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CartItem, CommonModule, MatDivider,MaterialModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {

  constructor(private router:Router){
    
  }

  cart = [1,1,1,1]

  navigateToCheckout(){
    this.router.navigate(["checkout"])
  }
}
