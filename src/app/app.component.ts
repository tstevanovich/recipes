import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '@app/core/animations/route.animations';
import { AuthService } from '@app/core/services/auth.service';
import { DataStorageService } from '@app/core/services/data-storage.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Firebase App is always required and must be first
const firebase = require('firebase/app');

// Add additional services that you want to use
require('firebase/auth');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset])
    .pipe(map((result) => result.matches));
  logo = require('../assets/logo.png');

  // default navigation
  navigation = [
    { link: 'recipes', label: 'Recipes' },
    { link: 'shopping-list', label: 'Shopping List' }
  ];
  // navigation if user is not authenticated
  authnavigation = [{ link: 'signup', label: 'Register' }, { link: 'signin', label: 'Login' }];

  constructor(
    public breakpointObserver: BreakpointObserver,
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCgYlA-Dyh7eWSvIEPwWi4cW0HLgr2s58E',
      authDomain: 'ng-recipe-book-50277.firebaseapp.com'
    });
  }

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe((response) => {
      return null;
    });
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

  isAuth() {
    return this.authService.isAuthenticated();
  }
}
