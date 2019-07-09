import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilLinkComponent } from './profil-link.component';

describe('ProfilLinkComponent', () => {
  let component: ProfilLinkComponent;
  let fixture: ComponentFixture<ProfilLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
