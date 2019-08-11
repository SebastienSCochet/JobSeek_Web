import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { JobSeekComponent } from './component/job-seek/job-seek.component';
import {AuthGuard} from './guard/auth.guard';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { SearchCriteriaComponent } from './component/search-criteria/search-criteria.component';
import { JobOffersGridComponent } from './component/job-offers-grid/job-offers-grid.component';
import { JobOffersMapComponent } from './component/job-offers-map/job-offers-map.component';
import { JobOfferDetailComponent } from './component/job-offer-detail/job-offer-detail.component';
import {JwtInterceptor} from './interceptor/jwt.interceptor';
import { FooterComponent } from './component/footer/footer.component';
import { AgmCoreModule } from '@agm/core';
import { JobOfferTabsComponent } from './component/job-offer-tabs/job-offer-tabs.component';
import { UserProfileAvatarComponent } from './component/user-profile-avatar/user-profile-avatar.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { UserProfileDescriptionComponent } from './component/user-profile-description/user-profile-description.component';
import { UserProfileModificationComponent } from './component/user-profile-modification/user-profile-modification.component';
import { AngularFireModule } from '@angular/fire';
import {AngularFireStorageModule, StorageBucket} from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { EnterpriseDetailComponent } from './component/enterprise-detail/enterprise-detail.component';
import { JobOfferCreationComponent } from './component/job-offer-creation/job-offer-creation.component';
import { EnterpriseSelectionComponent } from './component/enterprise-selection/enterprise-selection.component';
import {AutocompleteModule} from 'ng2-input-autocomplete';
import { EnterpriseCreationComponent } from './component/enterprise-creation/enterprise-creation.component';
import { JobOfferBoxComponent } from './component/job-offer-box/job-offer-box.component';


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
