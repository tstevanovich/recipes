import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '@app/core/services/alert.service';
import { DataStorageService } from '@app/core/services/data-storage.service';

// Firebase App is always required and must be first
const firebase = require('firebase/app');

// Add additional services that you want to use
require('firebase/auth');
require('firebase/messaging');

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  constructor(
    private alertService: AlertService,
    private router: Router,
    private dataStorageService: DataStorageService
  ) {}

  signupUser(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
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
        firebase
          .auth()
          .currentUser.getIdToken()
          .then((token: string) => {
            this.token = token;
            this.dataStorageService.getRecipes();
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
