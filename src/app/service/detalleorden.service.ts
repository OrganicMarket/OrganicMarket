import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { detalleorden } from '../model/detalleorden';
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
  })
  
export class DetalleordenService{
    url:string="http://localhost:5000/detalleorden"
    private listaCambio=new Subject<detalleorden[]>()
    constructor(private http:HttpClient) { }

    listar(){
        return this.http.get<detalleorden[]>(this.url);
    }
    insertar(propietario: detalleorden) {
        return this.http.post(this.url, propietario);
      }
      setLista(listaNueva: detalleorden[]) {
        this.listaCambio.next(listaNueva);
      }
      getLista() {
        return this.listaCambio.asObservable();
      }
}