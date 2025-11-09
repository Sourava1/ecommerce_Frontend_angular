import { Component } from '@angular/core';


import { MatIconModule } from '@angular/material/icon';
import { Home } from "./Module/feature/components/home/home";
import { Footer } from "./Module/shared/components/footer/footer";
import { Navbar } from "./Module/shared/components/navbar/navbar";
import { Products } from "./Module/feature/components/products/products";
import { RouterOutlet } from '@angular/router';
// import { Admin } from './Module/admin/components/admin';


@Component({
  selector: 'app-root',
  imports: [MatIconModule, Footer, Navbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ecommerce-angular';
}
