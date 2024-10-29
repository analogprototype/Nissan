import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nombreusuario: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    const user = { nombreusuario: this.nombreusuario, email: this.email, password: this.password };
    this.authService.register(user).subscribe(
      (response) => {
        console.log('Usuario registrado con éxito');
        this.router.navigate(['/login']);  // Redirigir a la página de login
      },
      (error) => {
        console.error('Error al registrarse:', error);
      }
    );
  }

  // Función para regresar al login si se presiona "Cancelar"
  cancel() {
    this.router.navigate(['/login']);  // Redirigir a la vista de login
  }
}