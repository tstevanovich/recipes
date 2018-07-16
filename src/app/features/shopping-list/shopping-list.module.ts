import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListHomeComponent } from '@app/features/shopping-list/shopping-list-home/shopping-list-home.component';
import { ShoppingEditComponent } from '@app/features/shopping-list/shopping-edit/shopping-edit.component';

const COMPONENTS = [ShoppingListHomeComponent, ShoppingEditComponent];
const PROVIDERS = [];
const MODULES = [CommonModule];

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  providers: [PROVIDERS],
  exports: [MODULES, COMPONENTS]
})
export class ShoppingListModule {}
