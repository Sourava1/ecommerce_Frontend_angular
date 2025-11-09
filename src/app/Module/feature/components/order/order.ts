import { Component } from '@angular/core';
import { MatCheckbox } from "@angular/material/checkbox";
import { OrderCard } from './order-card/order-card';
import { CommonModule } from '@angular/common';
import { MatDivider } from "@angular/material/divider";
import { Router } from '@angular/router';
import { MaterialModule } from '../../../../material-module';

@Component({
  selector: 'app-order',
  imports: [MatCheckbox,OrderCard,CommonModule,MaterialModule],
  templateUrl: './order.html',
  styleUrl: './order.css'
})
export class Order {

  constructor(private router:Router){}

  orderFilter = [
    {value:"on_the_way",label:' On The Way'},
    {value:"delivered",label:' Delivered'},
    {value:"cancelled",label:' Cancelled'},
    {value:"returned",label:'Returned'}
  ]

  orders = [[1,1],[1,1,1]]

  navigateToOrderDetails=(id:Number)=>{
      this.router.navigate([`/order/${id}`])
    }

}
