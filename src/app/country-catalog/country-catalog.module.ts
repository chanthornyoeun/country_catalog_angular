import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CountryDetailDialogComponent } from './country-detail-dialog/country-detail-dialog.component';
import { CountryCatalogComponent } from './country-catalog.component';
import { CountryCardComponent } from './country-card/country-card.component';
import { AlternativeNameComponent } from './alternative-name/alternative-name.component';
import { CountryCallingCodeComponent } from './country-calling-code/country-calling-code.component';
import { CountryNameComponent } from './country-name/country-name.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CardViewComponent } from './card-view/card-view.component';

const components = [
  CountryListComponent,
  CountryDetailDialogComponent,
  CountryCatalogComponent,
  CountryCardComponent,
  AlternativeNameComponent,
  CountryCallingCodeComponent,
  CountryNameComponent,
  PaginationComponent,
  CardViewComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: components
})
export class CountryCatalogModule { }
