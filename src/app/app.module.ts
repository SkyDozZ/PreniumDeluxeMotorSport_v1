import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowroomComponent } from './showroom/showroom.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { AccueilComponent } from './accueil/accueil.component';



@NgModule({
  declarations: [
    AppComponent,
    ShowroomComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    SectionComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
