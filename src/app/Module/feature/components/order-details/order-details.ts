import { Component } from '@angular/core';
import { AddressCard } from '../../../shared/components/address-card/address-card';
import { OrderCard } from '../order/order-card/order-card';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../material-module';
import { OrderTracker } from '../../../shared/components/order-tracker/order-tracker';

@Component({
  selector: 'app-order-details',
  imports: [AddressCard,OrderCard,CommonModule,MaterialModule,OrderTracker],
  templateUrl: './order-details.html',
  styleUrl: './order-details.css'
})
export class OrderDetails {

  orders=[1,1,1,1]


  steps=[
    {id:0,title:"PLACED",isCompleted:true},
    {id:1,title:"CONFIRMED",isCompleted:true},
    {id:2,title:"SHIPPED",isCompleted:false},
    {id:3,title:"DELIVERED",isCompleted:false}
  ]
}
