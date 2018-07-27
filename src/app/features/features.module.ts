import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

const COMPONENTS = [];
const PROVIDERS = [ShoppingListService];
const MODULES = [CommonModule, RecipesModule, ShoppingListModule, SignupComponent];

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS, SigninComponent],
  providers: [PROVIDERS]
})
export class FeaturesModule {}
