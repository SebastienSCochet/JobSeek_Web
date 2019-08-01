import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileDescriptionComponent } from './user-profile-description.component';

describe('UserProfileDescriptionComponent', () => {
  let component: UserProfileDescriptionComponent;
  let fixture: ComponentFixture<UserProfileDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
