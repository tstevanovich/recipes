import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RecipeDetailComponent } from '@app/features/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '@app/features/recipes/recipe-edit/recipe-edit.component';
import { RecipeHomeComponent } from '@app/features/recipes/recipe-home/recipe-home.component';
import { RecipeItemComponent } from '@app/features/recipes/recipe-item/recipe-item.component';
import { RecipeListComponent } from '@app/features/recipes/recipe-list/recipe-list.component';
import { RecipesRoutingModule } from '@app/features/recipes/recipes-routing.module';
import { SharedModule } from '@app/shared/shared.module';

const COMPONENTS = [
  RecipeHomeComponent,
  RecipeListComponent,
  RecipeDetailComponent,
  RecipeItemComponent,
  RecipeEditComponent
];
const PROVIDERS = [];
const MODULES = [CommonModule, SharedModule, RecipesRoutingModule];

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  providers: [PROVIDERS]
})
export class RecipesModule {}
