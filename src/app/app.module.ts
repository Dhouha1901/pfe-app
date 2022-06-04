import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AgencesComponent } from './agences/agences.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActualityComponent } from './actuality/actuality.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { environment } from 'src/environments/environment.prod';
import { initializeApp } from "firebase/app";
import { LoginnComponent } from './loginn/loginn.component';
import { SiegeComponent } from './siege/siege.component';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './profil/profil.component';
import { AjoutComponent } from './actuality/ajout/ajout.component';
import { UpdateActualityComponent } from './actuality/update-actuality/update-actuality.component';
import { ListComponent } from './actuality/list/list.component';
import { UpdateComponent } from './actuality/update/update.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AgencesComponent,
    ActualityComponent,
    LoginnComponent,
    SiegeComponent,
    ProfilComponent,
    AjoutComponent,
    UpdateActualityComponent,
    ListComponent,
    UpdateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,  
    CommonModule,
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
