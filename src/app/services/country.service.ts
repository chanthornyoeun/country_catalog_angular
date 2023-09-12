import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private readonly DEFAULT_FIELDS: string = 'name,flags,cca2,cca3,idd,altSpellings';

  constructor(private httpClient: HttpClient) { }

  /**
   * All all countries
   * @param fields Use to determine how many fields you want to.
   * Check public APIs to see fields definition https://gitlab.com/restcountries/restcountries/-/blob/master/FIELDS.md
   * @returns an array of country
   */
  getCountries(fields: string = this.DEFAULT_FIELDS): Observable<Country[]> {
    return this.httpClient.get<Country[]>(environment.API_URL + `/all?fields=${fields}`);
  }

  /**
   * Get country by code
   * @param code 2 characters country code
   * @returns a country object
   */
  getByCode(code: string): Observable<Country> {
    return this.httpClient
      .get<Country>(environment.API_URL + '/alpha/' + code)
      .pipe(
        map(res => res[0])
      );
  }

  /**
   * Search country by name
   * @param countryName
   * @returns an array of country
   */
  searchByName(countryName: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(environment.API_URL + `/name/${countryName}?fields=${this.DEFAULT_FIELDS}`);
  }

}
