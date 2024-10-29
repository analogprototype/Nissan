/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquiposComponent } from './equipos/equipos.component';
import { EquipoFormComponent } from './equipo-form/equipo-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/equipos', pathMatch: 'full' },  // Redirigir a la vista de equipos
  { path: 'equipos', component: EquiposComponent },  // Mostrar tabla de equipos
  { path: 'equipo-form', component: EquipoFormComponent },  // Formulario para agregar nuevo equipo
  { path: 'equipo-form/:id', component: EquipoFormComponent },  // Formulario para editar equipo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';  // Componente de login
import { RegisterComponent } from './register/register.component';  // Componente de registro
import { EquiposComponent } from './equipos/equipos.component';  // Tabla de equipos
import { EquipoFormComponent } from './equipo-form/equipo-form.component';  // Formulario de equipo

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirigir a la vista de login por defecto
  { path: 'login', component: LoginComponent },  // Vista de login
  { path: 'register', component: RegisterComponent },  // Vista de registro
  { path: 'equipos', component: EquiposComponent },  // Mostrar tabla de equipos después de iniciar sesión
  { path: 'equipo-form', component: EquipoFormComponent },  // Formulario para agregar nuevo equipo
  { path: 'equipo-form/:id', component: EquipoFormComponent },  // Formulario para editar equipo
  // Redirige cualquier otra ruta no definida al login
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }