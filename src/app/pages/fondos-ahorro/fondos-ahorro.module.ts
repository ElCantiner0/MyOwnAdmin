import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FondosAhorroPageRoutingModule } from './fondos-ahorro-routing.module';

import { FondosAhorroPage } from './fondos-ahorro.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FondosAhorroPageRoutingModule,
    ComponentsModule
    
  ],
  declarations: [FondosAhorroPage]
})
export class FondosAhorroPageModule {}
