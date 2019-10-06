import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PageDetailsComponent } from './page-details/page-details.component';

const routes: Routes = [
  { path: '', component: PageAccueilComponent },
  { path: 'details', component: PageDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
