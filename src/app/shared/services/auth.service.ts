import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '@app/shared/services/alert.service';

// Firebase App is always required and must be first
var firebase = require('firebase/app');

// Add additional services that you want to use
require('firebase/auth');
require('firebase/messaging');

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  constructor(private alertService: AlertService, private router: Router) {}

  signupUser(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
        this.alertService.success('User created');
      })
      .catch((error) => {
        this.alertService.error(error);
      });
  }

  signinUser(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
        firebase
          .auth()
          .currentUser.getIdToken()
          .then((token: string) => {
            this.token = token;
          });
        this.alertService.success('Successfully signed in');
        this.router.navigate(['/recipes']);
      })
      .catch((error) => {
        this.alertService.error(error);
      });
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/']);
  }

  getToken() {
    firebase
      .auth()
      .currentUser.getIdToken()
      .then((token: string) => {
        this.token = token;
      });
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
