import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ShowroomComponent } from './showroom/showroom.component';

const routes: Routes = [
  { path: 'showroom', component: ShowroomComponent },
  { path: '', component: AccueilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
