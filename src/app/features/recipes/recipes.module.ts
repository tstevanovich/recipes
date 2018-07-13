import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { RecipeHomeComponent } from '@app/features/recipes/recipe-home/recipe-home.component';
import { RecipeListComponent } from '@app/features/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from '@app/features/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from '@app/features/recipes/recipe-item/recipe-item.component';

const COMPONENTS = [RecipeHomeComponent, RecipeListComponent, RecipeDetailComponent, RecipeItemComponent];
const PROVIDERS = [];
const MODULES = [CommonModule, MatCardModule, MatIconModule];

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  providers: [PROVIDERS],
  exports: [MODULES, COMPONENTS]
})
export class RecipesModule {}
