import { Component, OnInit } from '@angular/core';

import { RecipeModel } from '../recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'cook-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  currentRecipe: RecipeModel;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.selectedRecipe
      .subscribe(
        (recipeSelected: RecipeModel) => this.currentRecipe = recipeSelected
      );
  }
}
