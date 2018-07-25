import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShoppingListService } from '@app/features/shopping-list/shopping-list.service';
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

  constructor(private shoppingListService: ShoppingListService, private fb: FormBuilder) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.shoppingEditForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });

    this.shoppingEditForm = this.fb.group({
      name: ['', Validators.required],
      // Validate amount is greater than 0
      amount: ['', [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')]]
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.shoppingEditForm.controls;
  }

  onAddItem() {
    // stop here if form is invalid
    if (this.shoppingEditForm.invalid) {
      return;
    }
    const newIngredient = new Ingredient(this.f.name.value, this.f.amount.value);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
