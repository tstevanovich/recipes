import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from '@app/features/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '@app/features/recipes/recipe-edit/recipe-edit.component';
import { RecipeHomeComponent } from '@app/features/recipes/recipe-home/recipe-home.component';
import { AuthGuard } from '@app/shared/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: RecipeHomeComponent,
    children: [
      { path: '', component: RecipeDetailComponent },
      { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
