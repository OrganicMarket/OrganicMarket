import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { Agricultor } from 'src/app/model/agricultor';
import { AgricultorService } from 'src/app/service/agricultor.service';

@Component({
  selector: 'app-agricultor-listar',
  templateUrl: './agricultor-listar.component.html',
  styleUrls: ['./agricultor-listar.component.css']
})
export class AgricultorListarComponent implements OnInit {
  dataSource: MatTableDataSource<Agricultor> = new MatTableDataSource()
  displayedColumns: string[] = ["ID","DNI","Telefono","Nombre","Correo","Direccion"]
  constructor(private as:AgricultorService) { }

  ngOnInit(): void {
    this.as.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
    })
  }

}
