import { Component, OnInit } from '@angular/core';

import { Ingredient } from '@app/shared/models/ingredient.model';
import { ShoppingListService } from '@app/features/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list-home',
  templateUrl: './shopping-list-home.component.html',
  styleUrls: ['./shopping-list-home.component.scss']
})
export class ShoppingListHomeComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
  }
}
