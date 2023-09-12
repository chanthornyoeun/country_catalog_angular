import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { Country } from 'src/app/models/country.model';

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
  initailPage: number = 1;

  constructor() { }

  ngOnInit(): void {
    this.pages = this.generatePageNumber();
    this.loadData(1);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.countries.currentValue !== changes.countries.previousValue) {
      this.pages = this.generatePageNumber();
      this.loadData(this.initailPage);
    }
  }

  loadData(page: number) {
    const itemPerPage: number = 25;
    const offset: number = (page - 1) * itemPerPage;
    this.countryList = this.countries.slice(offset, offset + itemPerPage);
  }

  private generatePageNumber() {
    const totalPage: number = this.countries.length / 25;
    const paginationList: number[] = [];

    if (totalPage < 1 && this.countries.length > 0) {
      paginationList.push(1);
    }

    for (let i = 1; i <= totalPage; i++) {
      paginationList.push(i);
    }

    return paginationList;
  }

}
