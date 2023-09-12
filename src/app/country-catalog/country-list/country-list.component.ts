import { Component, OnInit, Input, ViewChild, AfterViewInit, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryListComponent implements OnInit, AfterViewInit, OnChanges {

  displayedColumns: string[] = ['flag', 'code', 'name', 'nativeName', 'altSpellings', 'callingCode'];
  dataSource: MatTableDataSource<Country> = new MatTableDataSource<Country>();
  @Input() countries: Country[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.configureSortDataAccessor();
    this.dataSource.data = this.countries;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Reassign value to datasource again once countries changed
    if (changes.countries.currentValue !== changes.countries.previousValue) {
      this.dataSource.data = this.countries;
    }
  }

  private configureSortDataAccessor() {
    this.dataSource.sortingDataAccessor = (country, property) => {
      return country[property].official;
    }
  }

}
