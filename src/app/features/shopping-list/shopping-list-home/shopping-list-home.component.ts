import { Component, OnInit } from '@angular/core';
import { Ingredient } from '@app/shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list-home',
  templateUrl: './shopping-list-home.component.html',
  styleUrls: ['./shopping-list-home.component.scss']
})
export class ShoppingListHomeComponent implements OnInit {
  ingredients: Ingredient[] = [new Ingredient('Apple', 5), new Ingredient('Tomatoes', 10)];

  constructor() {}

  ngOnInit() {}

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
