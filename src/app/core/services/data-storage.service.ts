import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthService } from '@app/core/services/auth.service';
import { RecipeService } from '@app/core/services/recipe.service';
import { Recipe } from '@app/shared/models/recipe.model';
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
