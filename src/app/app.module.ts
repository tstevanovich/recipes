import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '@app/app-routing.module';
import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';
import { ConfigsModule } from '@app//configs/configs.module';
import { FeaturesModule } from '@app/features/features.module';

import { AppComponent } from '@app/app.component';

const COMPONENTS = [AppComponent];
const PROVIDERS = [];
const MODULES = [
  BrowserAnimationsModule,
  BrowserModule,
  AppRoutingModule,
  CoreModule,
  SharedModule,
  ConfigsModule,
  FeaturesModule
];

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  providers: [PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {}
