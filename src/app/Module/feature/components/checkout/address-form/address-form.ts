import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from "@angular/material/button";
import { MatDivider } from "@angular/material/divider";
import { AddressCard } from "../../../../shared/components/address-card/address-card";
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../material-module';
import { FormGroup,FormBuilder, Validators, FormsModule } from '@angular/forms';
import { MatFormField } from "@angular/material/form-field";

@Component({
  selector: 'app-address-form',
  imports: [MatButton, MatDivider, AddressCard, CommonModule, MaterialModule, MatButtonModule, MatFormField, FormsModule],
  templateUrl: './address-form.html',
  styleUrl: './address-form.css'
})
export class AddressForm  {
  myForm:FormGroup;
   constructor(private formBuilder: FormBuilder) {

      this.myForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      streetAddress: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      zipCode: ["", Validators.required],
      mobile: ["", Validators.required],
      });
  }

  adresses = [1, 1, 1]
  // myForm: FormGroup = this.formBuilder.group({
  //   firstName: ["", Validators.required],
  //   lastName: ["", Validators.required],
  //   streetAddress: ["", Validators.required],
  //   city: ["", Validators.required],
  //   state: ["", Validators.required],
  //   zipCode: ["", Validators.required],
  //   mobile: ["", Validators.required],

  // })

 
  handleCreateOrder(item: any) { }
  handleSubmit() {
    const formValue = this.myForm.value;
    console.log("form data",formValue)
   }

}
