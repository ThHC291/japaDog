import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonRegisterPageRoutingModule } from './person-register-routing.module';

import { PersonRegisterPage } from './person-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonRegisterPageRoutingModule
  ],
  declarations: [PersonRegisterPage]
})
export class PersonRegisterPageModule {}
