import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeHistorialPageRoutingModule } from './home-historial-routing.module';

import { HomeHistorialPage } from './home-historial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeHistorialPageRoutingModule
  ],
  declarations: [HomeHistorialPage]
})
export class HomeHistorialPageModule {}
