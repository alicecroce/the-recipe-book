import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes:Recipe[]=[
    new Recipe('A Test Recipe', 'This is a semply Test', 'https://get.pxhere.com/photo/dish-food-cuisine-ingredient-Karedok-meat-donburi-produce-side-dish-dak-galbi-Cao-l-u-yaki-udon-recipe-thai-food-oyakodon-korean-food-1614584.jpg')
  ];

}
