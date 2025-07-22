import { Component, HostListener } from '@angular/core';
import { RouterLink } from "@angular/router";
// import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from '../material-module';
import { MatMenuModule } from "@angular/material/menu";
import { NgIf } from "@angular/common";
import { NavContent } from "./nav-content/nav-content";

// import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, MaterialModule, MatMenuModule, NgIf, NavContent],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  currentSection:any
  isNavbarContentOpen:any

  openNavbarContent(section:any){
    this.isNavbarContentOpen= true;
    this.currentSection = section;//here in section men and women value will come,if someone click on Men then men value will come which defined on navbar.html
  }

  closeNavbarContent(){
    this.isNavbarContentOpen = false;
  }

//This logic is used to close any open modal when clicking anywhere on the desktop. 
  @HostListener('document:click',[`$event`]) // Listens for any click event on the entire document and passes the MouseEvent
  onDocumentClick(event:MouseEvent){  // Handler function that runs whenever a click occurs
    const modalContainer = document.querySelector(".modal-container");
    const openButtons = document.querySelectorAll(".open-button");// Selects all elements with class "open-button" (used to open modals)

    let clickInsideButton = false; // Initialize a flag to check if the click was inside any open-button 
    openButtons.forEach((button:Element)=>{  // Iterate over each open-button element
      if(button.contains(event.target as Node)){ // Check if the clicked element is inside the current button
        clickInsideButton=true;  // If yes, set flag to true (indicates we clicked an open button)
      }
    })

    if(modalContainer && !clickInsideButton && this.isNavbarContentOpen){
      this.closeNavbarContent();
    }
  }

  navigateTo(path:any){
    
  }

}
