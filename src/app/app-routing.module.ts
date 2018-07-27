import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from '@app/features/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '@app/features/recipes/recipe-edit/recipe-edit.component';
import { RecipeHomeComponent } from '@app/features/recipes/recipe-home/recipe-home.component';
import { ShoppingListHomeComponent } from '@app/features/shopping-list/shopping-list-home/shopping-list-home.component';
import { SignupComponent } from '@app/features/signup/signup.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipeHomeComponent,
    children: [
      { path: '', component: RecipeDetailComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent }
    ]
  },
  // {path: 'recipes', loadChildren: './features/recipes/recipes.module#RecipeModule'}
  { path: 'shopping-list', component: ShoppingListHomeComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
