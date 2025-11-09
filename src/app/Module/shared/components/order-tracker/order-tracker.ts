import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../../material-module';
import { MatDivider } from "@angular/material/divider";

@Component({
  selector: 'app-order-tracker',
  imports: [CommonModule,MaterialModule, MatDivider],
  templateUrl: './order-tracker.html',
  styleUrl: './order-tracker.css'
})
export class OrderTracker {

  @Input() activeStep:any;
  @Input() steps:any;
}
