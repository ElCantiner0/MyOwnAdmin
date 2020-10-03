import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-historial',
    pathMatch: 'full'
  },
  {
    path: 'notas',
    loadChildren: () => import('./pages/notas/notas.module').then( m => m.NotasPageModule)
  },
  {
    path: 'conceptos',
    loadChildren: () => import('./pages/conceptos/conceptos.module').then( m => m.ConceptosPageModule)
  },
  {
    path: 'fondos-ahorro',
    loadChildren: () => import('./pages/fondos-ahorro/fondos-ahorro.module').then( m => m.FondosAhorroPageModule)
  },
  {
    path: 'gastos',
    loadChildren: () => import('./pages/gastos/gastos.module').then( m => m.GastosPageModule)
  },
  {
    path: 'home-historial',
    loadChildren: () => import('./pages/home-historial/home-historial.module').then( m => m.HomeHistorialPageModule)
  },
  {
    path: 'nuevo-ingreso',
    loadChildren: () => import('./pages/nuevo-ingreso/nuevo-ingreso.module').then( m => m.NuevoIngresoPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
