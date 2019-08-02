import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './guard/auth.guard';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {JobSeekComponent} from './components/job-seek/job-seek.component';
import {JobOfferDetailComponent} from './components/job-offer-detail/job-offer-detail.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {EnterpriseDetailComponent} from './components/enterprise-detail/enterprise-detail.component';
import {JobOfferCreationComponent} from './components/job-offer-creation/job-offer-creation.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'job-offers' },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'job-offers', component: JobSeekComponent, canActivate: [AuthGuard] },
  { path: 'job-offers/:idJobOffer', component: JobOfferDetailComponent , canActivate: [AuthGuard] },
  { path: 'admin/job-offers', component: JobOfferCreationComponent, canActivate: [AuthGuard]},
  { path: 'enterprises/:idEnterprise', component: EnterpriseDetailComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: UserProfileComponent , canActivate: [AuthGuard] },
  { path: 'profile/:option', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
