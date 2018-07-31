import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShoppingEditComponent } from '@app/features/shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListHomeComponent } from '@app/features/shopping-list/shopping-list-home/shopping-list-home.component';
import { SharedModule } from '@app/shared/shared.module';

const COMPONENTS = [ShoppingListHomeComponent, ShoppingEditComponent];
const PROVIDERS = [];
const MODULES = [CommonModule, SharedModule];

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  providers: [PROVIDERS]
})
export class ShoppingListModule {}
