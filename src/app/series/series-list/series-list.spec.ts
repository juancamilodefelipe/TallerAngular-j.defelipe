import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesListComponent } from './series-list';

describe('SeriesListComponent', () => {
  let component: SeriesListComponent;
  let fixture: ComponentFixture<SeriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeriesListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SeriesListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
