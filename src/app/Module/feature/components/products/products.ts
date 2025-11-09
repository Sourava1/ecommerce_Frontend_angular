import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../../../material-module';
import { filters, singleFilter } from './FilterData';
import { ProductCard } from "../../../shared/components/product-card/product-card";
import { mensPantsPage1 } from '../../../../../Data/pants/men_page1';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule, MaterialModule, ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css'
})

export class Products {
  filterData : any
  singleFilterData : any;
  menPants : any;

  //ActivateRoute is used to read data from the URL (like id in /user/123).
  constructor(private router :Router,private activatedRoute:ActivatedRoute){}

  ngOnInit(){
    this.filterData = filters;
    this.singleFilterData = singleFilter;
    this.menPants = mensPantsPage1;
  }

  handleMultipleSelectFilter(value:string,sectionId:string){
    const queryParams = {...this.activatedRoute.snapshot.queryParams};
    console.log("query params" , queryParams);
    //if sectionId exist,then i first i have to remove the sectionId
    const filterValues = queryParams[sectionId] ? queryParams[sectionId].split(",") : [];//if sectionId is present in queryParams, split its value into an array using "," as the separator; otherwise, use an empty array.
    const valueIndex = filterValues.indexOf(value);//indexOf() used to find the first occurrence of a specified value within a string or an array. It returns the index (position) of the first match, or -1 if the value is not found. 
    //Now we need to check the properties of the category, such as blue, red, and black color. If a color is already present in the params, remove it; otherwise, add it.
    // Check category properties (e.g., blue, red, black).
    // If a color exists in the params, remove it; otherwise, add it.
    //so here valueIndex either (if exist) or -1(if not exist)

    //splice() is a JavaScript Array method that is used to remove, replace or insert items starting at a chosen index
    if(valueIndex != -1){
      filterValues.splice(valueIndex,1)//In the first parameter, I provide the index of the value to remove, and in the second parameter, I specify how many values to remove.
    }
    else{
      filterValues.push(value);
    }

    if(filterValues.length > 0 ){//if length greater then zero mean value present
      queryParams[sectionId] = filterValues.join(",");
    }
    else{//if length less than 0 mean no value is present so i also have to remove the ssectionID
      delete queryParams[sectionId];//deletde sectionId from params
    }

    this.router.navigate([],{queryParams,})
  }

  //now for radio button ,for radio buttton there is no need to write many logic because this is only single selector
  handleSingleSelectFilter(value:string,sectionId:string){
    const queryParams = {...this.activatedRoute.snapshot.queryParams};
    queryParams[sectionId] = value;
    //here no need to remove anything ,i just replacing
    this.router.navigate([],{queryParams})
  }

}