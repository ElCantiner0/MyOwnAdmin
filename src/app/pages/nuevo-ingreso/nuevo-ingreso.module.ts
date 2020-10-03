import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoIngresoPageRoutingModule } from './nuevo-ingreso-routing.module';

import { NuevoIngresoPage } from './nuevo-ingreso.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoIngresoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NuevoIngresoPage]
})
export class NuevoIngresoPageModule {}
