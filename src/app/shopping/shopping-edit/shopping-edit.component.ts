import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IngredientModel } from '../../ingredient/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'cook-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @ViewChild('optionInput') optionInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  updateShoppingList() {
    if (this.optionInput.nativeElement.value === '1') {
      const newIngredient = new IngredientModel(
        this.nameInput.nativeElement.value,
        this.amountInput.nativeElement.value
      );
      this.shoppingListService.addIngredient(newIngredient);
    }
  }

}
