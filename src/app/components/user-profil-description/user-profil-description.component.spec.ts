import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilDescriptionComponent } from './user-profil-description.component';

describe('UserProfilDescriptionComponent', () => {
  let component: UserProfilDescriptionComponent;
  let fixture: ComponentFixture<UserProfilDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfilDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfilDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
