import { DetalleCreaeditaComponent } from './page/detalleorden/detalle-creaedita/detalle-creaedita.component';
import { agricultor } from 'src/app/model/agricultor';
import { DetalleordenComponent } from './page/detalleorden/detalleorden.component';
import { AgricultorComponent } from './page/agricultor/agricultor.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdenComponent } from './page/orden/orden.component';
import { ProductoComponent } from './page/producto/producto.component';
import { PersonaComponent } from './page/persona/persona.component';
import { AdministradorComponent } from './page/administrador/administrador.component';
import { TipoComponent } from './page/tipo/tipo.component';
import { MayoristaComponent } from './page/mayorista/mayorista.component';
import { AcuerdoComponent } from './page/acuerdo/acuerdo.component';
import { PromocionComponent } from './page/promocion/promocion.component';
import { PublicacionComponent } from './page/publicacion/publicacion.component';
import { TipoCreaeditaComponent } from './page/tipo/tipo-creaedita/tipo-creaedita.component';
import { PersonaCrearpersonaComponent } from './page/persona/persona-crearpersona/persona-crearpersona.component';
import { AgricultorCreaeditaComponent } from './page/agricultor/agricultor-creaedita/agricultor-creaedita.component';
import { PublicacionCreaeditaComponent } from './page/publicacion/publicacion-creaedita/publicacion-creaedita.component';
import { MayoristaCreaeditaComponent } from './page/mayorista/mayorista-creaedita/mayorista-creaedita.component';
import { ProdutoCreaeditaComponent } from './page/producto/produto-creaedita/produto-creaedita.component';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [{
  path: 'agricultor', component: AgricultorComponent, children: [

    { path: 'nuevo', component: AgricultorCreaeditaComponent },
    { path: 'edicion/:id', component: AgricultorCreaeditaComponent }

  ]
}, {
  path: 'orden', component: OrdenComponent, children: [

  ]
}, {
  path: 'productos', component: ProductoComponent, children: [
    { path: 'nuevo', component: ProdutoCreaeditaComponent },
    { path: 'edicion/:id', component: ProdutoCreaeditaComponent }
  ]
}, {
  path: 'tipos', component: TipoComponent, children: [
    { path: 'nuevo', component: TipoCreaeditaComponent }



  ]
}, 

{
  path: 'login', component: LoginEnterComponent, children: [


  ]
}, 

{
  path: 'persona', component: PersonaComponent, children: [
    { path: 'nuevo', component: PersonaCrearpersonaComponent },
    { path: 'edicion/:id', component: PersonaCrearpersonaComponent }
  ]
}, {
  path: 'administrador', component: AdministradorComponent, children: [

  ]
}, {
  path: 'mayoristas', component: MayoristaComponent, children: [
    { path: 'nuevo', component: MayoristaCreaeditaComponent }
    , { path: 'edicion/:id', component: MayoristaCreaeditaComponent }
  ]
}, {
  path: 'acuerdos', component: AcuerdoComponent, children: [

  ]
},
{
  path: 'promociones', component: PromocionComponent, children: [
    { path: 'nuevo', component: PromocionCreaeditaComponent }
    , { path: 'edicion/:id', component: PromocionCreaeditaComponent }
  ]
},
{
  path: 'publicaciones', component: PublicacionComponent, children: [
    { path: 'nuevo', component: PublicacionCreaeditaComponent }
    , { path: 'edicion/:id', component: PublicacionCreaeditaComponent }

  ]
},
{
  path: 'detalleorden', component: DetalleordenComponent, children: [
    { path: 'nuevo', component: DetalleCreaeditaComponent },
    { path: 'edicion/:id', component: DetalleCreaeditaComponent }
  ]

},
{
  path: 'persona-crearpersona', component: PersonaCrearpersonaComponent, children: [

  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
