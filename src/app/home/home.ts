import { ServerRoute } from '@angular/ssr';
import { Component } from '@angular/core';
import { MainCarousel } from "./main-carousel/main-carousel";
import { ProductSlider } from "./product-slider/product-slider";
import { menJeans } from '../../../src/Data/Men/men_jeans'; 
import {gounsPage1} from '../../../src/Data/Gouns/gouns';
import {lehngacholiPage2} from "../../../src/Data/Saree/lenghaCholiPage2"
import {mens_kurta} from "../../../src/Data/Men/men_kurta";
import {mensShoesPage1} from "../../../src/Data/shoes"
@Component({
  selector: 'app-home',
  imports: [MainCarousel, ProductSlider],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {


    // menJeans:any;
    menJeans: any[] = [];
    womenGouns:any[] = [];
    lenghaCholi:any
    mensKurta:any
    mensShoes:any

    

    ngOnInit(){
      this.menJeans = menJeans.slice(0,5);
      // console.log("Men Jeans loaded:", this.menJeans);
      this.womenGouns=gounsPage1.slice(0,5);
      // console.log("Womes's gouns are",this.womenGouns)
      this.lenghaCholi = lehngacholiPage2.slice(0,5);
      this.mensKurta = mens_kurta.slice(0,5);
      this.mensShoes = mensShoesPage1.slice(0,5);
    }
}
