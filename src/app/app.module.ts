import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { ConfigsModule } from '@app/configs/configs.module';
import { CoreModule } from '@app/core/core.module';
import { FeaturesModule } from '@app/features/features.module';
import { SharedModule } from '@app/shared/shared.module';

const COMPONENTS = [AppComponent];
const PROVIDERS = [];
const MODULES = [
  BrowserAnimationsModule,
  BrowserModule,
  LayoutModule,
  AppRoutingModule,
  CoreModule,
  SharedModule,
  ConfigsModule,
  FeaturesModule,
  AppRoutingModule
];

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  providers: [PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {}
