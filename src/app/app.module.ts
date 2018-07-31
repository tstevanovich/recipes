import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { FeaturesModule } from '@app/features/features.module';
import { RecipeService } from '@app/features/recipes/recipe.service';
import { ShoppingListService } from '@app/features/shopping-list/shopping-list.service';
import { AlertService } from '@app/shared/services/alert.service';
import { AuthGuard } from '@app/shared/services/auth-guard.service';
import { AuthService } from '@app/shared/services/auth.service';
import { DataStorageService } from '@app/shared/services/data-storage.service';
import { SharedModule } from '@app/shared/shared.module';

const COMPONENTS = [AppComponent];
const PROVIDERS = [
  ShoppingListService,
  RecipeService,
  DataStorageService,
  AuthService,
  AuthGuard,
  AlertService
];
const MODULES = [
  BrowserAnimationsModule,
  BrowserModule,
  LayoutModule,
  FeaturesModule,
  SharedModule,
  AppRoutingModule
];

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  providers: [PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {}
