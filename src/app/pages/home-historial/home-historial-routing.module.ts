import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeHistorialPage } from './home-historial.page';

const routes: Routes = [
  {
    path: '',
    component: HomeHistorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeHistorialPageRoutingModule {}
