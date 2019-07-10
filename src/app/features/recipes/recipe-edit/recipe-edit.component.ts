import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '@app/core/services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  recipeForm: FormGroup;
  id: number;
  editMode = false;
  recipeName: string;
  recipeImagePath: string;
  recipeDescription: string;
  recipeIngredients = new FormArray([]);

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    // get id paramater from URL
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
    });

    // get recipe if in edit mode
    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      this.recipeName = recipe.name;
      this.recipeImagePath = recipe.imagePath;
      this.recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (const ingredient of recipe.ingredients) {
          this.recipeIngredients.push(
            this.fb.group({
              name: [ingredient.name, Validators.required],
              amount: [
                ingredient.amount,
                [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')]
              ]
            })
          );
        }
      }
    }

    // build form and set validation
    this.recipeForm = this.fb.group({
      name: [this.recipeName, Validators.required],
      imagePath: [this.recipeImagePath, Validators.required],
      description: [this.recipeDescription, Validators.required],
      ingredients: this.recipeIngredients
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.recipeForm.controls;
  }

  // submit the form
  onSubmit() {
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    // go back to recipes page if new, go to detail if edit
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  // create a new form array if a new ingredient is added
  onAddIngredient() {
    (this.recipeForm.get('ingredients') as FormArray).push(
      this.fb.group({
        name: ['', Validators.required],
        amount: [
          '',
          [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')]
        ]
      })
    );
  }

  onDeleteIngredient(index: number) {
    (this.recipeForm.get('ingredients') as FormArray).removeAt(index);
  }
}
