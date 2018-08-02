import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Ingredient } from '@app/core/models/ingredient.model';
import * as ShoppingListActions from '@app/features/shopping-list/store/shopping-list.actions';
import * as fromShoppingList from '@app/features/shopping-list/store/shopping-list.reducers';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  shoppingEditForm: FormGroup;
  subscription: Subscription;
  editMode = false;
  editedItem: Ingredient;

  constructor(private fb: FormBuilder, private store: Store<fromShoppingList.AppState>) {}

  ngOnInit() {
    // creates subscription if form goes into editing state
    this.subscription = this.store.select('shoppingList').subscribe((data) => {
      if (data.editedIngredientIndex > -1) {
        this.editedItem = data.editedIngredient;
        this.editMode = true;
        // update form values
        this.shoppingEditForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      } else {
        this.editMode = false;
      }
    });

    // build form and set validation
    this.shoppingEditForm = this.fb.group({
      name: ['', Validators.required],
      // validate amount is greater than 0
      amount: ['', [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')]]
    });
  }

  ngOnDestroy() {
    // reset store index
    this.store.dispatch(new ShoppingListActions.StopEdit());
    // destory subscriptions
    this.subscription.unsubscribe();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.shoppingEditForm.controls;
  }

  onSubmit(formDirective: FormGroupDirective): void {
    // stop here if form is invalid
    if (this.shoppingEditForm.invalid) {
      return;
    }
    // get form values
    const newIngredient = new Ingredient(this.f.name.value, this.f.amount.value);
    if (this.editMode) {
      // edit ingredient
      this.store.dispatch(new ShoppingListActions.UpdateIngredient({ ingredient: newIngredient }));
    } else {
      // add ingredient
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }
    // reset form value in untouched and not edit state
    this.editMode = false;
    formDirective.resetForm();
    this.shoppingEditForm.reset();
  }

  // clear the form and reset it out of edit mode
  onClear() {
    this.shoppingEditForm.reset();
    this.editMode = false;
  }

  // delete ingredient and clear form
  onDelete() {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.onClear();
  }
}
