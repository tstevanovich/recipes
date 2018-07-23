import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule
} from '@angular/material';
import { RecipeDetailComponent } from '@app/features/recipes/recipe-detail/recipe-detail.component';
import { RecipeHomeComponent } from '@app/features/recipes/recipe-home/recipe-home.component';
import { RecipeItemComponent } from '@app/features/recipes/recipe-item/recipe-item.component';
import { RecipeListComponent } from '@app/features/recipes/recipe-list/recipe-list.component';
import { RecipeService } from './recipe.service';

const COMPONENTS = [
  RecipeHomeComponent,
  RecipeListComponent,
  RecipeDetailComponent,
  RecipeItemComponent
];
const PROVIDERS = [RecipeService];
const MODULES = [
  CommonModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule
];

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  providers: [PROVIDERS],
  exports: [MODULES, COMPONENTS]
})
export class RecipesModule {}
