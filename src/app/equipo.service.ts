import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EquipoService {
  private apiUrl = 'http://localhost:3000/equipos'; // Cambia a la URL de tu backend

  constructor(private http: HttpClient) {}

  // Obtener todos los equipos
  getEquipos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Obtener un equipo por su ID
  getEquipo(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Agregar un nuevo equipo
  addEquipo(equipo: any): Observable<any> {
    return this.http.post(this.apiUrl, equipo);
  }

  // Obtener un equipo por su ID
  getEquipoById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Actualizar un equipo existente
  updateEquipo(id: number, equipo: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, equipo);
  }

  // Eliminar un equipo
  deleteEquipo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
