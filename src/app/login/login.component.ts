import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';  // Declarar la variable para los mensajes de error

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const credentials = { email: this.email, password: this.password };
    this.authService.login(credentials).subscribe(
      (response) => {
        this.authService.saveToken(response.token);
        this.errorMessage = '';  // Limpiar el mensaje de error si el login es exitoso
        this.router.navigate(['/equipos']);  // Redirige a la tabla de equipos después de iniciar sesión
      },
      (error) => {
        // Mostrar un mensaje de error cuando las credenciales sean incorrectas
        if (error.status === 400 || error.status === 401) {
          this.errorMessage = 'Usuario o contraseña incorrectos';
        } else {
          this.errorMessage = 'Error al iniciar sesión, intenta de nuevo';
        }
      }
    );
  }

   // Función para redirigir al registro
   navigateToRegister() {
    this.router.navigate(['/register']);  // Redirige a la página de registro
  }
}