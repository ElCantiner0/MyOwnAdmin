import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConceptosPageRoutingModule } from './conceptos-routing.module';

import { ConceptosPage } from './conceptos.page';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConceptosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ConceptosPage]
})
export class ConceptosPageModule {}
