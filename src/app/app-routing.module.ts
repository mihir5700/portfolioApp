import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PfAboutMeComponent } from './Components/pf-about-me/pf-about-me.component';
import { PfContactComponent } from './Components/pf-contact/pf-contact.component';
import { PfHomeComponent } from './Components/pf-home/pf-home.component';
import { PfProjectsComponent } from './Components/pf-projects/pf-projects.component';

const routes: Routes = [
  { path: 'home', component: PfHomeComponent },
  { path: 'about', component: PfAboutMeComponent },
  { path: 'projects', component: PfProjectsComponent },
  { path: 'contact', component: PfContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
