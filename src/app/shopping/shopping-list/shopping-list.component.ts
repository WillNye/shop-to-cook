import {Component, ElementRef, OnInit} from '@angular/core';
import {IngredientModel} from '../../ingredient/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'cook-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[];

  constructor(private shoppingListSerivce: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListSerivce.getIngredients();
    this.shoppingListSerivce.ingredientsChanged
      .subscribe(
        (newIngredientList: IngredientModel[]) => this.ingredients = newIngredientList
      );
  }

}
