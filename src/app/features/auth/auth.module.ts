import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule
} from '@angular/material';
import { SigninComponent } from '@app/features/auth/signin/signin.component';
import { SignupComponent } from '@app/features/auth/signup/signup.component';
import { AlertComponent } from '@app/shared/directives/alert.component';
import { AlertService } from '@app/shared/services/alert.service';
import { AuthService } from '@app/shared/services/auth.service';

const COMPONENTS = [AlertComponent, SigninComponent, SignupComponent];
const PROVIDERS = [AlertService, AuthService];
const MODULES = [
  CommonModule,
  ReactiveFormsModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule
];

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  providers: [PROVIDERS],
  exports: [MODULES, COMPONENTS]
})
export class AuthModule {}
