import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FondosAhorroPage } from './fondos-ahorro.page';

const routes: Routes = [
  {
    path: '',
    component: FondosAhorroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FondosAhorroPageRoutingModule {}
