import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileModificationComponent } from './user-profile-modification.component';

describe('UserProfileModificationComponent', () => {
  let component: UserProfileModificationComponent;
  let fixture: ComponentFixture<UserProfileModificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileModificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
