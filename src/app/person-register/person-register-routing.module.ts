import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonRegisterPage } from './person-register.page';

const routes: Routes = [
  {
    path: '',
    component: PersonRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonRegisterPageRoutingModule {}
