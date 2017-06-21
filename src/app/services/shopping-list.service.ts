import { EventEmitter, Injectable } from '@angular/core';
import { IngredientModel } from '../ingredient/ingredient.model';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<IngredientModel[]>();
  private ingredients: IngredientModel[] = [
    new IngredientModel('Cheese', 2),
    new IngredientModel('Pepperoni', 10)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: IngredientModel) {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.emit(this.getIngredients());
  }

  addIngredients(ingredients: IngredientModel[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.getIngredients());
  }

}
