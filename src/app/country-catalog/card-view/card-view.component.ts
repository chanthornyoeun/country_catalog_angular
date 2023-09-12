import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { Country } from 'src/app/models/country.model';
import { SortTypeEnum } from '../country-catalog.component';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardViewComponent implements OnInit, OnChanges {

  countryList: Country[] = [];
  @Input() countries: Country[] = [];
  @Input() pages: number[] = [];
  @Input() sortType: string;
  initailPage: number = 1;
  currentPage: number = 1;
  itemPerPage: number = 25;

  constructor() { }

  ngOnInit(): void {
    this.pages = this.generatePageNumber();
    this.showFirstPage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.countries?.currentValue !== changes.countries?.previousValue) {
      this.pages = this.generatePageNumber();
      this.loadData(this.initailPage);
    }
    this.reorderCountry(changes);
  }

  private showFirstPage() {
    this.sortCountry();
    this.loadData(1);
  }

  /**
   * Reorder country when user change sorting option
   * @param changes 
   */
  private reorderCountry(changes: SimpleChanges) {
    if (changes.sortType?.currentValue !== changes.sortType?.previousValue) {
      this.sortCountry();
      this.loadData(this.currentPage);
    }
  }

  loadData(page: number) {
    this.currentPage = page;
    const offset: number = (page - 1) * this.itemPerPage;
    this.countryList = this.countries.slice(offset, offset + this.itemPerPage);
  }

  private generatePageNumber() {
    const totalPage: number = this.countries.length / this.itemPerPage;
    const paginationList: number[] = [];

    if (totalPage < 1 && this.countries.length > 0) {
      paginationList.push(1);
    }

    for (let i = 1; i <= totalPage; i++) {
      paginationList.push(i);
    }

    return paginationList;
  }

  private sortCountry() {
    this.countries.sort(this.comparision.bind(this));
    this.countries = [...this.countries];
  }

  /**
   * Sort algorithm
   * @param countryA 
   * @param countryB 
   * @returns 
   */
  private comparision(countryA: Country, countryB: Country) {
    if (countryA.name.official < countryB.name.official) {
      return this.sortType === SortTypeEnum.ASC ? -1 : 1;
    }

    if (countryA.name.official > countryB.name.official) {
      return this.sortType === SortTypeEnum.ASC ? 1 : -1;
    }

    return 0;
  }

}
