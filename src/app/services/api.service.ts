import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    urlApi: string = 'http://52.14.31.190:4000/api/v1';
    esAdmin: boolean = false;

    constructor(private http: HttpClient) {}

    postLoginUsuario(usuario: string, clave: string) {
        return this.http.post(`${this.urlApi}/login-usuario`, { email: usuario, password: clave });
    }

    postRegistrarUsuario(body: any) {
        return this.http.post(`${this.urlApi}/registrar-usuario`, body);
    }

    postContacto(info: any) {
        return this.http.post(`${this.urlApi}/crear_Contacto`, info);
    }

    administracion() {
        return this.esAdmin;
    }

    postCrearReserva(info: any) {
        return this.http.post(`${this.urlApi}/crear-reserva`, info);
    }

    getReserva() {
        return this.http.get(`${this.urlApi}/consultar-reserva`);
    }

    getReservaporId(id: any) {
        return this.http.get(`${this.urlApi}/consultar-reserva-porId/${id}`);
    }

    deleteReserva(id: string) {
        return this.http.delete(`${this.urlApi}/eliminar-reserva/${id}`);
    }

    getDestinosPorZona(zona: string): Observable<any[]> {
        return this.http.get<any[]>(`${this.urlApi}/destinos/zona/${zona}`);
    }
}
