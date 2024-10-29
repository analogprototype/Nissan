import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // Importar HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquiposComponent } from './equipos/equipos.component';
import { EquipoFormComponent } from './equipo-form/equipo-form.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    EquiposComponent,
    EquipoFormComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  // Agregar HttpClientModule aquí
    FormsModule  // Para manejar formularios
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }