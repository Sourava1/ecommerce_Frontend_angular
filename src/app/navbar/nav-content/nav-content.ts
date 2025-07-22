import { Component, Input } from '@angular/core';
import { navigation } from './navvv-content';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-content',
   standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-content.html',
  styleUrl: './nav-content.css'
})
export class NavContent {

  category:any
  @Input() selectedSection:any

  ngOnInit(){
    this.category = navigation;
     console.log("Category Section",this.category);
    console.log("Selected Section",this.selectedSection);
  }
}
