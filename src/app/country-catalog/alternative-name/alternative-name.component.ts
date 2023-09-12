import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alternative-name',
  template: `
    <ul>
      <li *ngFor="let altName of alternativNames">{{ altName }}</li>
    </ul>
  `,
  styles: [
    `
      ul {
        padding-inline-start: 1rem
      }
    `
  ]
})
export class AlternativeNameComponent {

  @Input() alternativNames: string[] = [];

}
