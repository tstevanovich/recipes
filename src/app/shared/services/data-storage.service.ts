import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RecipeService } from '@app/features/recipes/recipe.service';
import { Recipe } from '@app/shared/models/recipe.model';
import { AuthService } from '@app/shared/services/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(
    private http: Http,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const token = this.authService.getToken();
    return this.http.put(
      'https://ng-recipe-book-50277.firebaseio.com/recipes.json?auth=' + token,
      this.recipeService.getRecipes()
    );
  }

  getRecipes() {
    const token = this.authService.getToken();
    return this.http
      .get('https://ng-recipe-book-50277.firebaseio.com/recipes.json?auth=' + token)
      .pipe(
        map((response: Response) => response.json()),
        map((recipe: Recipe) => {
          if (!recipe['ingredients']) {
            recipe.ingredients = [];
          }
          return recipe;
        })
      )
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
