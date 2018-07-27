import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataStorageService } from '@app/shared/services/data-storage.service';

const COMPONENTS = [];
const PROVIDERS = [DataStorageService];
const MODULES = [CommonModule];

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  providers: [PROVIDERS]
})
export class CoreModule {}
