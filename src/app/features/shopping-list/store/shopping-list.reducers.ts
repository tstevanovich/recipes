import { Ingredient } from '@app/core/models/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

export interface AppState {
  shoppingList: State;
}

export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

const initialState: State = {
  ingredients: [new Ingredient('Apple', 5), new Ingredient('Tomatoes', 10)],
  editedIngredient: null,
  editedIngredientIndex: -1
};

export function shoppingListReducer(
  state = initialState,
  action: ShoppingListActions.ShoppingListActions
) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      };
    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[state.editedIngredientIndex];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload.ingredient
      };
      const ingUpdate = [...state.ingredients];
      ingUpdate[state.editedIngredientIndex] = updatedIngredient;
      return {
        ...state,
        ingredients: ingUpdate,
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    case ShoppingListActions.DELETE_INGREDIENT:
      const ingDelete = [...state.ingredients];
      ingDelete.splice(state.editedIngredientIndex, 1);
      return {
        ...state,
        ingredients: ingDelete,
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    case ShoppingListActions.START_EDIT:
      const editedIngredient = { ...state.ingredients[action.payload] };
      return {
        ...state,
        editedIngredient: editedIngredient,
        editedIngredientIndex: action.payload
      };
    case ShoppingListActions.STOP_EDIT:
      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    default:
      return state;
  }
}
