import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthModule } from '@app/features/auth/auth.module';
import { HomeModule } from '@app/features/home/home.module';
import { ShoppingListModule } from '@app/features/shopping-list/shopping-list.module';

const COMPONENTS = [];
const PROVIDERS = [];
const MODULES = [CommonModule, AuthModule, ShoppingListModule, HomeModule];

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  providers: [PROVIDERS],
  exports: [MODULES, COMPONENTS]
})
export class FeaturesModule {}
