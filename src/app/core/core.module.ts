import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const COMPONENTS = [];
const PROVIDERS = [];
const MODULES = [CommonModule];

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  providers: [PROVIDERS]
})
export class CoreModule {}
