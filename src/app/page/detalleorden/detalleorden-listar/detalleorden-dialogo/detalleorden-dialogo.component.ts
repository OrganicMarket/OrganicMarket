import { DetalleordenService } from './../../../../service/detalleorden.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-detalleorden-dialogo',
  templateUrl: './detalleorden-dialogo.component.html',
  styleUrls: ['./detalleorden-dialogo.component.css']
})
export class DetalleordenDialogoComponent implements OnInit {

  constructor(private detalleordenService: DetalleordenService,
    private dialogRef: MatDialogRef<DetalleordenDialogoComponent>) { }

  ngOnInit(): void {
  }

  confirmar(estado:boolean){
    this.detalleordenService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
