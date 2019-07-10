import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators
} from '@angular/forms';
import { ShoppingListService } from '@app/core/services/shopping-list.service';
import { Ingredient } from '@app/shared/models/ingredient.model';
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
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(
    private shoppingListService: ShoppingListService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    // creates subscription if form goes into editing state
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        // update form values
        this.shoppingEditForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );

    // build form and set validation
    this.shoppingEditForm = this.fb.group({
      name: ['', Validators.required],
      // validate amount is greater than 0
      amount: ['', [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')]]
    });
  }

  ngOnDestroy() {
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
    const newIngredient = new Ingredient(
      this.f.name.value,
      this.f.amount.value
    );
    if (this.editMode) {
      // edit ingredient
      this.shoppingListService.updateIngredient(
        this.editedItemIndex,
        newIngredient
      );
    } else {
      // add ingredient
      this.shoppingListService.addIngredient(newIngredient);
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
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
}
