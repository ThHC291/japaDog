import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimalRegisterPageRoutingModule } from './animal-register-routing.module';

import { AnimalRegisterPage } from './animal-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimalRegisterPageRoutingModule
  ],
  declarations: [AnimalRegisterPage]
})
export class AnimalRegisterPageModule {}
