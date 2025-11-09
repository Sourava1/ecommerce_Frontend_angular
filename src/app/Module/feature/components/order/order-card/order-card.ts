import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-card',
  imports: [],
  templateUrl: './order-card.html',
  styleUrl: './order-card.css'
})
export class OrderCard {

  constructor(private router:Router){}

    // navogateToOrderDetails=(id:Number)=>{
    //   this.router.navigate([`orders/${id}`])
    // }
}
