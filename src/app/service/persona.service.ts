import { persona } from '../model/persona';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject,EMPTY } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url: string = "http://localhost:5000/persona"
  private listaCambio=new Subject<persona[]>()
  private confirmaEliminacion=new Subject<Boolean>();
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<persona[]>(this.url);
  }
  insertar(persona:persona){
    return this.http.post(this.url,persona);
  }
  setLista(listaNueva:persona[]) {
      this.listaCambio.next(listaNueva);
  }
  getLista(){
    return this.listaCambio.asObservable();
  }
  modificar(persona:persona){
    return this.http.put(this.url+"/"+persona.id,persona);
  }
  listarId(id:number){
    return this.http.get<persona>(`${this.url}/${id}`);
  }

  //Functions delete
  eliminar(id:number){
    return this.http.delete(this.url+"/"+id);
  }
  getConfirmaEliminacion(){
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado:Boolean){
    this.confirmaEliminacion.next(estado);
  }
  buscar(texto:string){
    if(texto.length!=0){
        return this.http.post<persona[]>(`${this.url}/buscar`,texto.toLowerCase(),{})
    }
    return EMPTY;
  }
}
