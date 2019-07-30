import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilPersonalInformationComponent } from './user-profil-personal-information.component';

describe('UserProfilPersonalInformationComponent', () => {
  let component: UserProfilPersonalInformationComponent;
  let fixture: ComponentFixture<UserProfilPersonalInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfilPersonalInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfilPersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
