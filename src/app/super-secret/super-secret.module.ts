import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperSecretPageRoutingModule } from './super-secret-routing.module';

import { SuperSecretPage } from './super-secret.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperSecretPageRoutingModule
  ],
  declarations: [SuperSecretPage]
})
export class SuperSecretPageModule {}
