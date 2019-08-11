import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferTabsComponent } from './job-offer-tabs.component';

describe('JobOfferTabsComponent', () => {
  let component: JobOfferTabsComponent;
  let fixture: ComponentFixture<JobOfferTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOfferTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOfferTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
