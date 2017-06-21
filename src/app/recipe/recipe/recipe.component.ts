import {Component, Input, OnInit} from '@angular/core';

import { RecipeModel } from '../recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'cook-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input() recipe: RecipeModel;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelect() {
    this.recipeService.selectedRecipe.emit(this.recipe);
  }

}
