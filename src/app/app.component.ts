import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { AuthService } from '@app/shared/services/auth.service';
import { DataStorageService } from '@app/shared/services/data-storage.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset])
    .pipe(map((result) => result.matches));
  logo = '/assets/logo.png';
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
    this.dataStorageService.storeRecipes().subscribe((response: Response) => {
      return null;
    });
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
