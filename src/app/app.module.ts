import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { JobSeekComponent } from './components/job-seek/job-seek.component';
import {AuthGuard} from './guard/auth.guard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SearchCriteriaComponent } from './components/search-criteria/search-criteria.component';
import { JobOffersGridComponent } from './components/job-offers-grid/job-offers-grid.component';
import { JobOffersMapComponent } from './components/job-offers-map/job-offers-map.component';
import { JobOfferDetailComponent } from './components/job-offer-detail/job-offer-detail.component';
import {JwtInterceptor} from './interceptor/jwt.interceptor';
import { UserProfilComponent } from './components/user-profil/user-profil.component';
import { FooterComponent } from './components/footer/footer.component';
import { AgmCoreModule } from '@agm/core';
import { JobOfferTabsComponent } from './components/job-offer-tabs/job-offer-tabs.component';
import { UserProfilPreferencesComponent } from './components/user-profil-preferences/user-profil-preferences.component';
import { UserProfilPersonalInformationComponent } from './components/user-profil-personal-information/user-profil-personal-information.component';
import { UserProfilDescriptionComponent } from './components/user-profil-description/user-profil-description.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    JobSeekComponent,
    PageNotFoundComponent,
    SignUpComponent,
    SearchCriteriaComponent,
    JobOffersGridComponent,
    JobOffersMapComponent,
    JobOfferDetailComponent,
    UserProfilComponent,
    FooterComponent,
    JobOfferTabsComponent,
    UserProfilPreferencesComponent,
    UserProfilPersonalInformationComponent,
    UserProfilDescriptionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB9slGgu1ys6hV7unhO29KuIw6a6Br1xt4'
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
