import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule
} from '@angular/material';
import { ShoppingEditComponent } from '@app/features/shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListHomeComponent } from '@app/features/shopping-list/shopping-list-home/shopping-list-home.component';

const COMPONENTS = [ShoppingListHomeComponent, ShoppingEditComponent];
const PROVIDERS = [];
const MODULES = [
  CommonModule,
  ReactiveFormsModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule
];

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  providers: [PROVIDERS],
  exports: [MODULES, COMPONENTS]
})
export class ShoppingListModule {}
