import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
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
    .pipe(map(result => result.matches));
  logo = '/assets/logo.png';
  navigation = [{ link: 'recipes', label: 'Recipes' }, { link: 'shopping-list', label: 'Shopping List' }];

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {}
}
