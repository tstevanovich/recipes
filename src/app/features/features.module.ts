import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RecipesModule } from '@app/features/recipes/recipes.module';
import { ShoppingListModule } from '@app/features/shopping-list/shopping-list.module';
import { ShoppingListService } from '@app/features/shopping-list/shopping-list.service';

const COMPONENTS = [];
const PROVIDERS = [ShoppingListService];
const MODULES = [CommonModule, RecipesModule, ShoppingListModule];

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  providers: [PROVIDERS],
  exports: [MODULES, COMPONENTS]
})
export class FeaturesModule {}
