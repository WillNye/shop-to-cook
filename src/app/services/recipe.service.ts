import { EventEmitter, Injectable, Output } from '@angular/core';
import { RecipeModel } from '../recipe/recipe.model';
import { IngredientModel } from '../ingredient/ingredient.model';

@Injectable()
export class RecipeService {
  @Output() selectedRecipe = new EventEmitter<RecipeModel>();
  private recipes: RecipeModel[] = [
    new RecipeModel(
      'Pizza',
      'Cheese pizza',
      'http://img.sndimg.com/food/image/upload/h_465,w_620,c_fit/v1/img/recipes/19/45/93/picQBnFao.jpg',
    [
      new IngredientModel('Mozzerrella', 4),
      new IngredientModel('Gouda', 2),
      new IngredientModel('Brie', 3),
      new IngredientModel('Dough', 1),
      new IngredientModel('Tomato Sauce', 1)
    ]),
    new RecipeModel(
      'More Pizza',
      'Alt Cheese pizza',
      'http://img.sndimg.com/food/image/upload/h_465,w_620,c_fit/v1/img/recipes/19/45/93/picQBnFao.jpg',
      [
        new IngredientModel('Buffalo cheese', 3),
        new IngredientModel('Gorgonzola', 2),
        new IngredientModel('Bleu Cheese', 1),
        new IngredientModel('Dough', 1),
        new IngredientModel('Alfrado Sauce', 1)
      ])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

}
