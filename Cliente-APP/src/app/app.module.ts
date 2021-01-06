import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TasksService} from './services/tasks.service'
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import{MatDatepickerModule} from '@angular/material';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import { ImageUploadModule } from 'angular2-image-upload';
import {crearUsuComponent} from './components/crearUsu/crearUsu.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { ActualUsuComponent } from './components/actual-usu/actual-usu.component';
import { PrincipalComponent } from './components/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
   
    crearUsuComponent,
    ContactosComponent,
    ActualUsuComponent,
    PrincipalComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule, 
    MatMomentDateModule,
    
    ReactiveFormsModule,
    ImageUploadModule.forRoot(),
   
    
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
