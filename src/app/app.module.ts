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
import { FooterComponent } from './components/footer/footer.component';
import { AgmCoreModule } from '@agm/core';
import { JobOfferTabsComponent } from './components/job-offer-tabs/job-offer-tabs.component';
import { UserProfileAvatarComponent } from './components/user-profile-avatar/user-profile-avatar.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileDescriptionComponent } from './components/user-profile-description/user-profile-description.component';
import { UserProfileModificationComponent } from './components/user-profile-modification/user-profile-modification.component';
import { AngularFireModule } from '@angular/fire';
import {AngularFireStorageModule, StorageBucket} from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { EnterpriseDetailComponent } from './components/enterprise-detail/enterprise-detail.component';
import { JobOfferCreationComponent } from './components/job-offer-creation/job-offer-creation.component';
import { EnterpriseSelectionComponent } from './components/enterprise-selection/enterprise-selection.component';
import {AutocompleteModule} from 'ng2-input-autocomplete';
import { EnterpriseCreationComponent } from './components/enterprise-creation/enterprise-creation.component';
import { JobOfferBoxComponent } from './components/job-offer-box/job-offer-box.component';


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
    FooterComponent,
    JobOfferTabsComponent,
    UserProfileAvatarComponent,
    UserProfileComponent,
    UserProfileDescriptionComponent,
    UserProfileModificationComponent,
    EnterpriseDetailComponent,
    JobOfferCreationComponent,
    EnterpriseSelectionComponent,
    EnterpriseCreationComponent,
    JobOfferBoxComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // For Google Maps element
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB9slGgu1ys6hV7unhO29KuIw6a6Br1xt4'
    }),
    // For Firebase Storage
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    // For autocomplete component
    AutocompleteModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    AuthGuard,
    { provide: StorageBucket, useValue: 'jobseek-1564363037557' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
