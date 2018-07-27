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
import { SignupComponent } from './signup.component';

const COMPONENTS = [SignupComponent];
const PROVIDERS = [];
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
  providers: [PROVIDERS]
})
export class SignupModule {}
