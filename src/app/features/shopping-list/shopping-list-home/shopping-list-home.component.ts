import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Ingredient } from '@app/shared/models/ingredient.model';
import { ShoppingListService } from '@app/features/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list-home',
  templateUrl: './shopping-list-home.component.html',
  styleUrls: ['./shopping-list-home.component.scss']
})
export class ShoppingListHomeComponent implements OnInit {
  ingredients: Ingredient[];
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private shoppingListService: ShoppingListService
  ) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
  }
}
