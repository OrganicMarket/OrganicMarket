import { Component, OnInit } from '@angular/core';
import { PublicacionService } from 'src/app/service/publicacion.service';
import { MatTableDataSource } from '@angular/material/table';
import { Publicacion } from 'src/app/model/publicacion';
import { MatDialog } from '@angular/material/dialog';
import { PublicacionDialogoComponent } from './publicacion-dialogo/publicacion-dialogo.component';
@Component({
  selector: 'app-publicacion-listar',
  templateUrl: './publicacion-listar.component.html',
  styleUrls: ['./publicacion-listar.component.css']
})
export class PublicacionListarComponent implements OnInit {
  lista: Publicacion[] = [];
  dataSource: MatTableDataSource<Publicacion> = new MatTableDataSource();
  displayedColumns: string[] = ['Id Publicacion', 'Agricultor', 'Producto', 'Contenido', 'Editar', 'Eliminar'];
  private idMayor: number = 0;
  constructor(private pU: PublicacionService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.pU.listar().subscribe(data => {
      this.lista=data;
      this.dataSource = new MatTableDataSource(data);
    })
    this.pU.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    });
    this.pU.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(PublicacionDialogoComponent);
  }

  eliminar(id: number) {
    this.pU.eliminar(id).subscribe(() => {
      this.pU.listar().subscribe(data => {
        this.pU.setLista(data);
      });
    });
  }
}
