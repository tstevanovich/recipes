import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { ConfigsModule } from '@app/configs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,

    // core, shared, and configs
    CoreModule,
    SharedModule,
    ConfigsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
