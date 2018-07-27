import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SigninModule } from '@app/features/signin/signin.module';
import { SignupModule } from '@app/features/signup/signup.module';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';

const COMPONENTS = [];
const PROVIDERS = [ShoppingListService];
const MODULES = [CommonModule, RecipesModule, ShoppingListModule, SignupModule, SigninModule];

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  providers: [PROVIDERS]
})
export class FeaturesModule {}
