import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@app/core/services/auth.service';
import { RecipeService } from '@app/core/services/recipe.service';
import { Recipe } from '@app/shared/models/recipe.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    return this.http.put(
      'https://ng-recipe-book-50277.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),
      { observe: 'body' }
    );
  }

  getRecipes() {
    return this.http
      .get<Recipe[]>('https://ng-recipe-book-50277.firebaseio.com/recipes.json', {
        observe: 'body',
        responseType: 'json'
      })
      .pipe(
        map((recipes) => {
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        })
      )
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
