import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from '@app/features/home/home.component';
import { SharedModule } from '@app/shared/shared.module';

const COMPONENTS = [HomeComponent];
const PROVIDERS = [];
const MODULES = [CommonModule, SharedModule];

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  providers: [PROVIDERS]
})
export class HomeModule {}
