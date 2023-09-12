import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CountryService } from 'src/app/services/country.service';
import { debounceTime } from 'rxjs/operators';
import { Country } from 'src/app/models/country.model';
import { CountryDetailDialogService } from '../country-detail-dialog.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['flag', 'code', 'name', 'nativeName', 'altSpellings', 'callingCode'];
  dataSource: MatTableDataSource<Country> = new MatTableDataSource<Country>();
  searchCtl: FormControl = new FormControl();
  isLoading: boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private countryService: CountryService,
    private countryDetailDialogService: CountryDetailDialogService
  ) { }

  ngOnInit(): void {
    this.getCountries();
    this.configureSortDataAccessor();
    this.onSearchChange();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * Get countries from public APIs
   */
  private getCountries() {
    this.isLoading = true;
    this.countryService.getCountries().subscribe(res => {
      this.dataSource.data = res;
      this.isLoading = false;
    });
  }

  private configureSortDataAccessor() {
    this.dataSource.sortingDataAccessor = (country, property) => {
      return country[property].official;
    }
  }

  private onSearchChange() {
    this.searchCtl.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value: string) => {
        this.dataSource.filter = value.trim();
      });
  }

  viewCountryDetail(countryCode: string) {
    this.countryDetailDialogService.openDialog(countryCode);
  }

}
