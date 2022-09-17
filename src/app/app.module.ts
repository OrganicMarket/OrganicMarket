import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { MatTableModule } from '@angular/material/table'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MayoristaComponent } from './page/mayorista/mayorista.component';
import { AcuerdoComponent } from './page/acuerdo/acuerdo.component';
import { AgricultorComponent } from './page/agricultor/agricultor.component';
import { AgricultorListarComponent } from './page/agricultor/agricultor-listar/agricultor-listar.component';
import { MayoristaListarComponent } from './page/mayorista/mayorista-listar/mayorista-listar.component';
import { AcuerdoListarComponent } from './page/acuerdo/acuerdo-listar/acuerdo-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    MayoristaComponent,
    AcuerdoComponent,
    AgricultorComponent,
    AgricultorListarComponent,
    MayoristaListarComponent,
    AcuerdoListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
