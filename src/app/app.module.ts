import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilLinkComponent } from './components/profil-link/profil-link.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainTitleComponent } from './components/main-title/main-title.component';
import { JobOffersComponent } from './components/job-offers/job-offers.component';
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { JobSeekComponent } from './components/job-seek/job-seek.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilLinkComponent,
    NavigationComponent,
    MainTitleComponent,
    JobOffersComponent,
    LoginComponent,
    HeaderComponent,
    JobSeekComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: JobSeekComponent },
      { path: 'login', component: LoginComponent },
      { path: 'job-offers', component: JobOffersComponent }
    ], { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
