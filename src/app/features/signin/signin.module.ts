import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SigninComponent } from './signin.component';

const COMPONENTS = [SigninComponent];
const PROVIDERS = [];
const MODULES = [CommonModule];

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  providers: [PROVIDERS]
})
export class SigninModule {}
