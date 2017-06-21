import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cook-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() displayRecipeApp = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this.displayRecipeApp.emit(false);
  }

  displayRecipe(showRecipe) {
    this.displayRecipeApp.emit(showRecipe);
  }

}
