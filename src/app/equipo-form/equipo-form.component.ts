import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipoService } from '../equipo.service';

@Component({
  selector: 'app-equipo-form',
  templateUrl: './equipo-form.component.html',
  styleUrls: ['./equipo-form.component.css']
})
export class EquipoFormComponent implements OnInit {
  equipo: any = {
    nombre_dueno: '',
    apellido_dueno: '',
    modelo: '',
    fecha_ingreso: '',
    telefono: '',
    fallo: ''
  };
  id!: number;

  constructor(
    private equipoService: EquipoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];  // Obtener el ID si estamos en modo de edición
    if (this.id) {
      // Si hay un ID, estamos en modo edición, cargar los datos del equipo
      this.equipoService.getEquipo(this.id).subscribe(data => {
        this.equipo = data.data;  // Prellenar el formulario con los datos del equipo
      });
    }
  }

  saveEquipo(): void {
    if (this.id) {
      // Si hay un ID, actualizamos el equipo existente
      this.equipoService.updateEquipo(this.id, this.equipo).subscribe(() => {
        this.router.navigate(['/equipos']);  // Redirigir a la lista de equipos después de actualizar
      });
    } else {
      // Si no hay ID, creamos un nuevo equipo
      this.equipoService.addEquipo(this.equipo).subscribe(() => {
        this.router.navigate(['/equipos']);  // Redirigir a la lista de equipos después de añadir
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/equipos']);  // Redirige a la vista de la tabla
  }
}