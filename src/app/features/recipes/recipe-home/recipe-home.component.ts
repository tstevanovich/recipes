import { Component, OnInit } from '@angular/core';
import { Recipe } from '@app/shared/models/recipe.model';

@Component({
  selector: 'app-recipe-home',
  templateUrl: './recipe-home.component.html',
  styleUrls: ['./recipe-home.component.scss']
})
export class RecipeHomeComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() {}

  ngOnInit() {}
}
