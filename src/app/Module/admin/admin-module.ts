import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { Admin } from './components/admin';
import { Dashboard } from './components/dashboard/dashboard';


@NgModule({
  // declarations: [
  //   Admin,
  //   Dashboard
  // ],//there are no need to declare Admin and Dashboard here because this is standalone component
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    // Admin,
    // Dashboard
  ]
})
export class AdminModule { }
