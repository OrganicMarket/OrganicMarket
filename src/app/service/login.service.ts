import { login } from './../model/login';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject, EMPTY} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = "http://localhost:5000/login"
  private listaCambio = new Subject<login[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<login[]>(this.url);
  }
  insertar(login: login) {
    return this.http.post(this.url, login);
  }
  setLista(listaNueva: login[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  /*
  modificar(login: login) {
    return this.http.put(this.url + "/" + login.id, login);
    //si se quiere cambiar para que no salga el url, cambiar la linea de arriba
  }*/
  listarId(id: number) {
    return this.http.get<login>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<login[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}
