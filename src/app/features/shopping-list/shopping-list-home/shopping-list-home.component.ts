import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '@app/core/models/ingredient.model';
import * as ShoppingListActions from '@app/features/shopping-list/store/shopping-list.actions';
import * as fromShoppingList from '@app/features/shopping-list/store/shopping-list.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-shopping-list-home',
  templateUrl: './shopping-list-home.component.html',
  styleUrls: ['./shopping-list-home.component.scss']
})
export class ShoppingListHomeComponent implements OnInit {
  shoppingListState: Observable<{ ingredients: Ingredient[] }>;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<fromShoppingList.AppState>
  ) {}

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
  }

  onEditItem(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
}
