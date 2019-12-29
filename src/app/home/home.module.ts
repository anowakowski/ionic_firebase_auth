import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { SuperSecretComponent } from './super-secret/super-secret.component';
////import { FirebaseUIModule } from 'firebaseui-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ////FirebaseUIModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path: 'secrets',
        component: SuperSecretComponent
      }
    ])
  ],
  declarations: [
    HomePage,
    SuperSecretComponent
  ]
})
export class HomePageModule {}
