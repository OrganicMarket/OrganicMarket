import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcuerdoComponent } from './page/acuerdo/acuerdo.component';
import { AgricultorComponent } from './page/agricultor/agricultor.component';
import { MayoristaComponent } from './page/mayorista/mayorista.component';

const routes: Routes = [{
  path: 'mayoristas', component: MayoristaComponent, children:[

  ]
},{
  path: 'agricultores', component: AgricultorComponent, children:[

  ]
},{
  path: 'acuerdos', component: AcuerdoComponent, children:[
    
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
