import { Component, Input } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../material-module';
@Component({
  selector: 'app-address-card',
  imports: [CommonModule,MaterialModule,MatButtonModule],
  templateUrl: './address-card.html',
  styleUrl: './address-card.css'
})
export class AddressCard {

  @Input() address:any;
}
