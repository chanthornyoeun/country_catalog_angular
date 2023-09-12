import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';
import { Country } from '../models/country.model';
import { FormControl } from '@angular/forms';
import { debounceTime, finalize } from 'rxjs/operators';


type ViewType = 'list' | 'card';
enum ViewTypeEnum {
  LIST = 'list',
  CARD = 'card'
}

@Component({
  selector: 'app-country-catalog',
  templateUrl: './country-catalog.component.html',
  styleUrls: ['./country-catalog.component.css']
})
export class CountryCatalogComponent implements OnInit {

  viewType: ViewType = 'list';
  isLoading: boolean = false;
  countries: Country[] = [];
  searchCtl: FormControl = new FormControl('');
  ViewTypeEnum = ViewTypeEnum;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountries();
    this.onSearchChange();
  }

  /**
  * Get countries from public APIs
  */
  private getCountries() {
    this.isLoading = true;
    this.countryService.getCountries().subscribe(countries => {
      this.countries = countries;
      this.isLoading = false;
    });
  }

  /**
   * Get countries by name
   * @param countryName 
   */
  private getCountriesByName(countryName: string) {
    this.isLoading = true;
    this.countryService.searchByName(countryName)
      .pipe(
        finalize(() => this.isLoading = false)
      )
      .subscribe(countries => {
        this.countries = countries;
      }, (error) => {
        this.countries = [];
      });
  }

  /**
   * Search country by country name
   */
  private onSearchChange() {
    this.searchCtl.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value: string) => {
        if (value?.trim()) {
          this.getCountriesByName(value.trim());
        } else {
          this.getCountries();
        }
      });
  }

}
