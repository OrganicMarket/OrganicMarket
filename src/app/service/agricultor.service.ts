import { Injectable } from '@angular/core';
import { Agricultor } from '../model/agricultor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgricultorService {
  url: string = "http://localhost:5000/agricultores"
  constructor(private http:HttpClient) {}

  listar(){
    return this.http.get<Agricultor[]>(this.url)
  }
}
