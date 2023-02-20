import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PfSidebarComponent } from './Components/pf-sidebar/pf-sidebar.component';
import { PfHomeComponent } from './Components/pf-home/pf-home.component';
import { PfAboutMeComponent } from './Components/pf-about-me/pf-about-me.component';
import { PfProjectsComponent } from './Components/pf-projects/pf-projects.component';
import { PfContactComponent } from './Components/pf-contact/pf-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PfSidebarComponent,
    PfHomeComponent,
    PfAboutMeComponent,
    PfProjectsComponent,
    PfContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
