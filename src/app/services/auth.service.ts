import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseUIModule } from 'firebaseui-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authStateUser: firebase.User = null;
  constructor(private af: AngularFireAuth) {
    af.authState.subscribe((user) => {
      this.authStateUser = user;
    });
  }

  get authenticated(): boolean {
    return this.authStateUser !== null;
  }

  get currentUser(): firebase.User {
    return this.authenticated ? this.authStateUser : null;
  }
}
