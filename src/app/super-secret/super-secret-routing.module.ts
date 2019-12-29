import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperSecretPage } from './super-secret.page';

const routes: Routes = [
  {
    path: 'secret',
    component: SuperSecretPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperSecretPageRoutingModule {}
