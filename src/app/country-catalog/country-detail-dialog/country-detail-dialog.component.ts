import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Country } from 'src/app/models/country.model';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country-detail-dialog',
  templateUrl: './country-detail-dialog.component.html',
  styleUrls: ['./country-detail-dialog.component.css']
})
export class CountryDetailDialogComponent implements OnInit {

  isLoading: boolean = true;
  country$: Observable<Country>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    this.getCountryDetailByCode(this.data.countryCode);
  }


  private getCountryDetailByCode(countryCode: string) {
    this.country$ = this.countryService.getByCode(countryCode)
      .pipe(
        finalize(() => this.isLoading = false)
      );
  }

}
