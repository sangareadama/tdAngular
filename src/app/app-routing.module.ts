import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { PersonneComponent } from './personne/personne.component';

const routes: Routes = [
  {path: '',  redirectTo : '/accueil',
  pathMatch : 'full'},
  {path:"accueil",component:AccueilComponent},
  {path:"personne",component:PersonneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
