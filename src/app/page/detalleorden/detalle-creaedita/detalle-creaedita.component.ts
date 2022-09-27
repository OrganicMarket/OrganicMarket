import { DetalleordenService } from './../../../service/detalleorden.service';
import { Router } from '@angular/router';
import { detalleorden } from './../../../model/detalleorden';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-creaedita',
  templateUrl: './detalle-creaedita.component.html',
  styleUrls: ['./detalle-creaedita.component.css']
})
export class DetalleCreaeditaComponent implements OnInit {
  detalleorden:detalleorden=new detalleorden();
  mensaje: string="";
  constructor(private DetalleordenService:DetalleordenService, private Router:Router) { }

  ngOnInit(): void {
  }

  aceptar():void{
    if (this.detalleorden.nombre.length > 0) {

      this.DetalleordenService.insertar(this.detalleorden).subscribe(d => {
        this.DetalleordenService.listar().subscribe(d => {
          this.DetalleordenService.setLista(d);
        })
      })
      this.Router.navigate(['detalleorden']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
}
