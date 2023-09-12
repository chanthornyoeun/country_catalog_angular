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

  constructor(private httpClient: HttpClient) { }

  /**
   * All all countries
   * @param fields Use to determine how many fields you want to.
   * Check public APIs to see fields definition https://gitlab.com/restcountries/restcountries/-/blob/master/FIELDS.md
   * @returns 
   */
  getCountries(fields: string = 'name,flags,cca2,cca3,idd,altSpellings'): Observable<Country[]> {
    return this.httpClient.get<Country[]>(environment.API_URL + `/all?fields=${fields}`);
  }

  /**
   * Get country by code
   * @param code 2 characters country code
   * @returns 
   */
  getByCode(code: string): Observable<Country> {
    return this.httpClient
      .get<Country>(environment.API_URL + '/alpha/' + code)
      .pipe(
        map(res => res[0])
      );
  }

}
