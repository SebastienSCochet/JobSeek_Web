import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './guard/auth.guard';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {ProfilComponent} from './components/profil/profil.component';
import {JobSeekComponent} from './components/job-seek/job-seek.component';
import {JobOfferDetailComponent} from './components/job-offer-detail/job-offer-detail.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'job-offers' },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent, canActivate: [AuthGuard] },
  { path: 'job-offers', component: JobSeekComponent, canActivate: [AuthGuard] },
  { path: 'job-offers/:idJobOffer', component: JobOfferDetailComponent , canActivate: [AuthGuard] },
  { path: 'profil/:idUser', component: ProfilComponent , canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
