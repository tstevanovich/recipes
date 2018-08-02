import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { CoreModule } from '@app/core/core.module';
import { FeaturesModule } from '@app/features/features.module';
import { shoppingListReducer } from '@app/features/shopping-list/store/shopping-list.reducers';
import { SharedModule } from '@app/shared/shared.module';
import { StoreModule } from '@ngrx/store';

const COMPONENTS = [AppComponent];
const PROVIDERS = [];
const MODULES = [
  BrowserAnimationsModule,
  BrowserModule,
  LayoutModule,
  FeaturesModule,
  SharedModule,
  CoreModule,
  StoreModule.forRoot({ shoppingList: shoppingListReducer }),
  AppRoutingModule
];

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  providers: [PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {}
