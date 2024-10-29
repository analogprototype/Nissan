import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../equipo.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  equipos: any[] = [];
  equipoId: number = 0;  // Variable para almacenar el ID a buscar

  constructor(private equipoService: EquipoService, private router: Router, private authService: AuthService) { }
  


  ngOnInit(): void {
    this.loadEquipos();
  }

  // Cargar la lista de equipos
  loadEquipos(): void {
    this.equipoService.getEquipos().subscribe(data => {
      this.equipos = data.data;
    });
  }

  // Eliminar un equipo
  deleteEquipo(id: number): void {
    this.equipoService.deleteEquipo(id).subscribe(() => {
      this.loadEquipos();  // Recargar la lista después de eliminar
    });
  }

  // Navegar al formulario para editar un equipo
  editEquipo(id: number): void {
    this.router.navigate([`/equipo-form/${id}`]);
  }

  // Navegar al formulario para añadir un equipo
  addEquipo(): void {
    this.router.navigate(['/equipo-form']);
  }

  // Buscar equipo por ID
  buscarEquipoPorId(): void {
    if (this.equipoId) {
      this.equipoService.getEquipoById(this.equipoId).subscribe(
        (data) => {
          this.equipos = [data.data];  // Mostrar solo el equipo buscado
        },
        (error) => {
          alert('Equipo no encontrado');
          this.loadEquipos();  // Volver a cargar todos los equipos si no se encuentra
        }
      );
    }
  }

  logout() {
    this.authService.logout();  // Eliminar el token
    this.router.navigate(['/login']);  // Redirigir al login
  }

}