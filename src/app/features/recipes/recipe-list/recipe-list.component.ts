import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '@app/shared/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simplay a test',
      'https://www.bbcgoodfood.com/sites/default/files/recipe_images/recipe-image-legacy-id--1284490_9.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simplay another test',
      'http://visualrecipes.com/images/uploads/recipe_images/411_image1.JPG'
    )
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
