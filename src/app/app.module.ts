import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilLinkComponent } from './components/profil-link/profil-link.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainTitleComponent } from './components/main-title/main-title.component';
import { JobOffersComponent } from './components/job-offers/job-offers.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { JobSeekComponent } from './components/job-seek/job-seek.component';
import {AuthGuard} from './guard/auth.guard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import {AntiAuthGuard} from './guard/anti-auth.guard';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProfilComponent } from './components/profil/profil.component';



@NgModule({
  declarations: [
    AppComponent,
    ProfilLinkComponent,
    NavigationComponent,
    MainTitleComponent,
    JobOffersComponent,
    LoginComponent,
    HeaderComponent,
    JobSeekComponent,
    PageNotFoundComponent,
    SignUpComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthGuard,
    AntiAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
