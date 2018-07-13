import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListHomeComponent } from '@app/features/shopping-list/shopping-list-home/shopping-list-home.component';

describe('ShoppingListHomeComponent', () => {
  let component: ShoppingListHomeComponent;
  let fixture: ComponentFixture<ShoppingListHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingListHomeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
