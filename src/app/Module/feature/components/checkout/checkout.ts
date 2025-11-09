import { Component } from '@angular/core';
import { AddressForm } from "./address-form/address-form";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  imports: [AddressForm,CommonModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {

}
