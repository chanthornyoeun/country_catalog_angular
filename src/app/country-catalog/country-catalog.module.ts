import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CountryDetailDialogComponent } from './country-detail-dialog/country-detail-dialog.component';



@NgModule({
  declarations: [CountryListComponent, CountryDetailDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [CountryListComponent]
})
export class CountryCatalogModule { }
