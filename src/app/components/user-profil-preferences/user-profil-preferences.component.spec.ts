import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilPreferencesComponent } from './user-profil-preferences.component';

describe('UserProfilPreferencesComponent', () => {
  let component: UserProfilPreferencesComponent;
  let fixture: ComponentFixture<UserProfilPreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfilPreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfilPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
