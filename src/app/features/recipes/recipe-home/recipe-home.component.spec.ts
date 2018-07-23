import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeHomeComponent } from '@app/features/recipes/recipe-home/recipe-home.component';

describe('RecipesComponent', () => {
  let component: RecipeHomeComponent;
  let fixture: ComponentFixture<RecipeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeHomeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
