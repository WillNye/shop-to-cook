import { Component, Input, OnInit } from '@angular/core';
import { IngredientModel } from './ingredient.model';

@Component({
  selector: 'cook-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {
  @Input() theIngredient: IngredientModel;

  constructor() { }

  ngOnInit() {
  }

}
