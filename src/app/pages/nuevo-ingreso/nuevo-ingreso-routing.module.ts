import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoIngresoPage } from './nuevo-ingreso.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoIngresoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoIngresoPageRoutingModule {}
