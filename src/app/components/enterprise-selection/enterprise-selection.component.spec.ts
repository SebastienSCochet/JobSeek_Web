import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseSelectionComponent } from './enterprise-selection.component';

describe('EnterpriseSelectionComponent', () => {
  let component: EnterpriseSelectionComponent;
  let fixture: ComponentFixture<EnterpriseSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
