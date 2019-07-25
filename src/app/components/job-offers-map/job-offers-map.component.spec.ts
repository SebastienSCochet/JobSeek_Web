import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOffersMapComponent } from './job-offers-map.component';

describe('JobOffersMapComponent', () => {
  let component: JobOffersMapComponent;
  let fixture: ComponentFixture<JobOffersMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOffersMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOffersMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
