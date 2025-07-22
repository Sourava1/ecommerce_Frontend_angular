import { Component } from '@angular/core';
import { Home } from './home/home';
import { Navbar } from "./navbar/navbar";
import { MatIconModule } from '@angular/material/icon';
import { Footer } from "./footer/footer";


@Component({
  selector: 'app-root',
  imports: [Home, Navbar, MatIconModule, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ecommerce-angular';
}
