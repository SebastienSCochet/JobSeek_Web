import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilLinkComponent } from './profil-link/profil-link.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainTitleComponent } from './main-title/main-title.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilLinkComponent,
    NavigationComponent,
    MainTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
