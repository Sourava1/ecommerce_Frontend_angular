import { Component, Input } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { MatButton } from "@angular/material/button";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cart-item',
  imports: [MatIcon, MatButton,CommonModule],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.css'
})
export class CartItem {

  @Input() showButton:any;

  updateCartItem(num:Number){
    console.log(num);
  }

  removeCartItem(){
    console.log("remove cart item")
  }

}
