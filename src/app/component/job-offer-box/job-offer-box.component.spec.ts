import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferBoxComponent } from './job-offer-box.component';

describe('JobOfferBoxComponent', () => {
  let component: JobOfferBoxComponent;
  let fixture: ComponentFixture<JobOfferBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOfferBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOfferBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
