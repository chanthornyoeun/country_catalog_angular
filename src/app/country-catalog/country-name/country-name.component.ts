import { Component, Input } from '@angular/core';
import { Country } from 'src/app/models/country.model';
import { CountryDetailDialogService } from '../country-detail-dialog.service';

@Component({
  selector: 'app-country-name',
  template: `
    <span class="country-name" (click)="viewCountryDetail(country.cca2)">
      {{ country.name.official }}
    </span>
  `,
  styles: [
    ` 
    .country-name:hover {
        cursor: pointer;
        text-decoration: underline;
        color: blue;
    }
    `
  ]
})
export class CountryNameComponent {

  @Input() country: Country;

  constructor(private countryDetailDialogService: CountryDetailDialogService) { }

  viewCountryDetail(countryCode: string) {
    this.countryDetailDialogService.openDialog(countryCode);
  }

}
