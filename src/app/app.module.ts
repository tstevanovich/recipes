import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { ConfigsModule } from '@app/configs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    LayoutModule,

    // core, shared, and configs
    CoreModule,
    SharedModule,
    ConfigsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
