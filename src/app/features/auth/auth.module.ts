import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from '@app/features/auth/auth-routing.module';
import { SigninComponent } from '@app/features/auth/signin/signin.component';
import { SignupComponent } from '@app/features/auth/signup/signup.component';
import { SharedModule } from '@app/shared/shared.module';

const COMPONENTS = [SigninComponent, SignupComponent];
const PROVIDERS = [];
const MODULES = [CommonModule, SharedModule, AuthRoutingModule];

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  providers: [PROVIDERS]
})
export class AuthModule {}
