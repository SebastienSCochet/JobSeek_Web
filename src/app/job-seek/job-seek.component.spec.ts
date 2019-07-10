import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeekComponent } from './job-seek.component';

describe('JobSeekComponent', () => {
  let component: JobSeekComponent;
  let fixture: ComponentFixture<JobSeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobSeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
