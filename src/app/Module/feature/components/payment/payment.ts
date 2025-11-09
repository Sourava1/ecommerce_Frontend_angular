import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../../../material-module';
import { AddressCard } from '../../../shared/components/address-card/address-card';
import { CartItem } from '../../../shared/components/cart-item/cart-item';

@Component({
  selector: 'app-payment',
  imports: [CommonModule,MaterialModule,AddressCard,CartItem],
  templateUrl: './payment.html',
  styleUrl: './payment.css'
})
export class Payment {

  products=[1,1,1,1,1,1,1,1,1,1]

  constructor(){
    console.log("payment.ts working fine")
  }
}
