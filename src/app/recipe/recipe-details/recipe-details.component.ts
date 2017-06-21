import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'cook-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipeModel: RecipeModel;
  @ViewChild('recipeOptionInput') recipeOptionInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  manageRecipe() {
    if (this.recipeOptionInput.nativeElement.value === '1') {
      this.shoppingListService.addIngredients(this.recipeModel.ingredients);
    }
  }

}
