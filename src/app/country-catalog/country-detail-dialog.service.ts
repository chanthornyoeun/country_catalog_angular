import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CountryDetailDialogComponent } from './country-detail-dialog/country-detail-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class CountryDetailDialogService {

  constructor(private matDialog: MatDialog) { }

  openDialog(countryCode: string) {
    this.matDialog.open(CountryDetailDialogComponent, { data: { countryCode } }).afterClosed();
  }

}
