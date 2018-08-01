import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@app/features/home/home.component';
import { ShoppingListHomeComponent } from '@app/features/shopping-list/shopping-list-home/shopping-list-home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: './features/recipes/recipes.module#RecipesModule' },
  { path: 'shopping-list', component: ShoppingListHomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
