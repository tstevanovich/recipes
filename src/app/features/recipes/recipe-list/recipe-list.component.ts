import { Component, OnInit } from '@angular/core';
import { Recipe } from '@app/shared/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simplay a test',
      'https://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simplay a test',
      'https://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'
    )
  ];

  constructor() {}

  ngOnInit() {}
}
