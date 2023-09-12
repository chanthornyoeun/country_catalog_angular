import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCatalogComponent } from './country-catalog.component';

describe('CountryCatalogComponent', () => {
  let component: CountryCatalogComponent;
  let fixture: ComponentFixture<CountryCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
