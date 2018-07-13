import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const COMPONENTS = [];
const PROVIDERS = [];
const MODULES = [CommonModule];

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  providers: [PROVIDERS],
  exports: [MODULES, COMPONENTS]
})
export class ConfigsModule {}
