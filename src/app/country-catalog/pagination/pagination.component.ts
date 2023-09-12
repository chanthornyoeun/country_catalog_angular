import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `
    <div class="pagination">
      <button 
        mat-icon-button
        matTooltip="Previous Page"
        [disabled]="currentPage === pages[0]"
        (click)="previousPage()">
        <mat-icon class="mat-18">navigate_before</mat-icon>
      </button>
      <mat-chip-list (change)="changePage($event.value)">
        <mat-chip
          #chipRef="matChip"
          (click)="chipRef.selectViaInteraction()"
          style="cursor: pointer;"
          *ngFor="let p of pages"
          [selected]="p == currentPage"
          [value]="p"
          >
          {{ p }}
        </mat-chip>
      </mat-chip-list>
      <button 
        mat-icon-button
        matTooltip="Next Page"
        [disabled]="currentPage === pages[pages.length - 1]"
        (click)="nextPage()">
          <mat-icon class="mat-18">navigate_next</mat-icon>
      </button>
    </div>
  `,
  styles: [
    `
    .pagination {
      display: flex;
      gap: 0.5rem;
      justify-content: center;
      align-items: center;
      position: sticky;
      bottom: 0px;
      z-index: 10;
      background: white;
      padding: 1rem 0;
    }
    `
  ]
})
export class PaginationComponent {

  @Input() pages: number[] = [];
  @Output() pageChagned: EventEmitter<number> = new EventEmitter<number>();
  currentPage: number = 1;

  changePage($page) {
    this.currentPage = $page;
    this.notifyPageChanged();
  }

  previousPage() {
    this.currentPage--;
    this.notifyPageChanged();
  }

  nextPage() {
    this.currentPage++;
    this.notifyPageChanged();
  }

  private notifyPageChanged() {
    this.pageChagned.emit(this.currentPage);
  }

}
