import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '@app/core/models/recipe.model';
import { AuthService } from '@app/core/services/auth.service';
import { RecipeService } from '@app/core/services/recipe.service';
import * as ShoppingListActions from '@app/features/shopping-list/store/shopping-list.actions';
import * as fromShoppingList from '@app/features/shopping-list/store/shopping-list.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private store: Store<fromShoppingList.AppState>
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  onAddToShoppingList() {
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipe.ingredients));
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

  isAuth() {
    return this.authService.isAuthenticated();
  }
}
