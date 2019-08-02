import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferCreationComponent } from './job-offer-creation.component';

describe('JobOfferCreationComponent', () => {
  let component: JobOfferCreationComponent;
  let fixture: ComponentFixture<JobOfferCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOfferCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOfferCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
