import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,
    ReactiveFormsModule,FormsModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatCheckboxModule,
    MatRadioModule, MatRadioModule, ReactiveFormsModule,
    MatProgressBarModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,
    ReactiveFormsModule,FormsModule
  ]
})
export class MaterialModule { }
