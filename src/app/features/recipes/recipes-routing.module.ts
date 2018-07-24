import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from '@app/features/recipes/recipe-detail/recipe-detail.component';
import { RecipeHomeComponent } from './recipe-home/recipe-home.component';

const routes: Routes = [
  {
    path: '',
    component: RecipeHomeComponent,
    children: [{ path: '', component: RecipeDetailComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
