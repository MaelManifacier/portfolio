import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StarsComponent } from './stars/stars.component';
import { PageDetailsComponent } from './page-details/page-details.component';
import { CompetenceTexteComponent } from './competence-texte/competence-texte.component';

@NgModule({
  declarations: [
    AppComponent,
    PageAccueilComponent,
    StarsComponent,
    PageDetailsComponent,
    CompetenceTexteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
