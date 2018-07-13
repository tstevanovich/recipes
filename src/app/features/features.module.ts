import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesModule } from '@app/features/recipes/recipes.module';
import { ShoppingListModule } from '@app/features/shopping-list/shopping-list.module';

const COMPONENTS = [];
const PROVIDERS = [];
const MODULES = [CommonModule, RecipesModule, ShoppingListModule];

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  providers: [PROVIDERS],
  exports: [MODULES, COMPONENTS]
})
export class FeaturesModule {}
