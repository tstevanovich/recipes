import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule],
  declarations: [HeaderComponent],
  providers: [],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HeaderComponent
  ]
})
export class CoreModule {}
