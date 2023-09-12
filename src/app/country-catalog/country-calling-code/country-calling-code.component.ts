import { Component, Input } from '@angular/core';
import { Idd } from 'src/app/models/country.model';

@Component({
  selector: 'app-country-calling-code',
  template: `
    <ng-container *ngFor="let suffixe of countryCallingCodes.suffixes">
      {{ countryCallingCodes.root }}{{ suffixe }}
    </ng-container>
  `,
})
export class CountryCallingCodeComponent {

  @Input() countryCallingCodes: Idd;

}
