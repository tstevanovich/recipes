import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from '@app/features/recipes/recipe-detail/recipe-detail.component';
import { RecipeHomeComponent } from '@app/features/recipes/recipe-home/recipe-home.component';
import { ShoppingListHomeComponent } from '@app/features/shopping-list/shopping-list-home/shopping-list-home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/shopping-list', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipeHomeComponent,
    children: [
      { path: '', component: RecipeDetailComponent },
      { path: ':id', component: RecipeDetailComponent }
    ]
  },
  // {path: 'recipes', loadChildren: './features/recipes/recipes.module#RecipeModule'}
  { path: 'shopping-list', component: ShoppingListHomeComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
