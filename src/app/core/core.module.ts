import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptor } from '@app/core/interceptors/auth.interceptor';
import { LoggingInterceptor } from '@app/core/interceptors/logging.interceptor';
import { AlertService } from '@app/core/services/alert.service';
import { AuthGuard } from '@app/core/services/auth-guard.service';
import { AuthService } from '@app/core/services/auth.service';
import { DataStorageService } from '@app/core/services/data-storage.service';
import { RecipeService } from '@app/core/services/recipe.service';
import { ShoppingListService } from '@app/core/services/shopping-list.service';

const COMPONENTS = [];
const PROVIDERS = [
  ShoppingListService,
  RecipeService,
  DataStorageService,
  AuthService,
  AuthGuard,
  AlertService,
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
];
const MODULES = [CommonModule];

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  providers: [PROVIDERS],
  exports: [MODULES, COMPONENTS]
})
export class CoreModule {}
