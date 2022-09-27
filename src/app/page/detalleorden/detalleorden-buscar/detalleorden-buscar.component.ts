import { detalleorden } from './../../../model/detalleorden';
import { DetalleordenService } from './../../../service/detalleorden.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalleorden-buscar',
  templateUrl: './detalleorden-buscar.component.html',
  styleUrls: ['./detalleorden-buscar.component.css']
})
export class DetalleordenBuscarComponent implements OnInit {

  textoBuscar: string = ""
  constructor(private detalleordenService: DetalleordenService) { }

  ngOnInit(): void {
  }

  buscar(e: any) {
    let array: detalleorden[] = [];
    this.detalleordenService.listar().subscribe(d => {
      d.forEach((element, index) => {
        if (element.nombre.includes(e.target.value)) {
          array.push(d[index]);
        }
      });
      this.detalleordenService.setLista(array);
    })
  }

}
