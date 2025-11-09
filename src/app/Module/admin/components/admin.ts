import { Component } from '@angular/core';
import { AdminRoutingModule } from "../admin-routing-module";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  // imports: [AdminRoutingModule],
  imports:[RouterOutlet],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {

}
