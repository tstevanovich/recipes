import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule
} from '@angular/material';
import { RecipesRoutingModule } from '@app/features/recipes/recipes-routing.module';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeHomeComponent } from './recipe-home/recipe-home.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
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
  MatMenuModule,
  RecipesRoutingModule
];

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  providers: [PROVIDERS]
})
export class RecipesModule {}
