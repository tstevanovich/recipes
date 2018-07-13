import { ShoppingListModule } from '@app/features/shopping-list/shopping-list.module';

describe('ShoppingListModule', () => {
  let shoppingListModule: ShoppingListModule;

  beforeEach(() => {
    shoppingListModule = new ShoppingListModule();
  });

  it('should create an instance', () => {
    expect(shoppingListModule).toBeTruthy();
  });
});
