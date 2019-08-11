import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {AuthGuard} from './guard/auth.guard';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import {SignUpComponent} from './component/sign-up/sign-up.component';
import {JobSeekComponent} from './component/job-seek/job-seek.component';
import {JobOfferDetailComponent} from './component/job-offer-detail/job-offer-detail.component';
import {UserProfileComponent} from './component/user-profile/user-profile.component';
import {EnterpriseDetailComponent} from './component/enterprise-detail/enterprise-detail.component';
import {JobOfferCreationComponent} from './component/job-offer-creation/job-offer-creation.component';
import {EnterpriseCreationComponent} from './component/enterprise-creation/enterprise-creation.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/job-offers' },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'job-offers', component: JobSeekComponent, canActivate: [AuthGuard] },
  { path: 'job-offers/:idJobOffer', component: JobOfferDetailComponent , canActivate: [AuthGuard] },
  { path: 'admin/job-offers', component: JobOfferCreationComponent, canActivate: [AuthGuard]},
  { path: 'admin/enterprises', component: EnterpriseCreationComponent, canActivate: [AuthGuard]},
  { path: 'enterprises/:idEnterprise', component: EnterpriseDetailComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: UserProfileComponent , canActivate: [AuthGuard] },
  { path: 'profile/:option', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
