import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOffersGridComponent } from './job-offers-grid.component';

describe('JobOffersGridComponent', () => {
  let component: JobOffersGridComponent;
  let fixture: ComponentFixture<JobOffersGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOffersGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOffersGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
