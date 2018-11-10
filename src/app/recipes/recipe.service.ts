import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Kebab Parathe', 
        'Tasty', 
        'https://media-cdn.tripadvisor.com/media/photo-s/09/e5/53/f4/kabab-corner.jpg',
         [
             new Ingredient('Meat', 1),
             new Ingredient('French Fries', 1)
         ]),
        new Recipe('Maharaja Burger', 
        'ohh yea!!', 
        'http://mcdonaldsblog.in/wp-content/uploads/2016/01/maharaja_mac_7.jpg',
         [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
         ])
      ]

      constructor(private slService:ShoppingListService){

      }

      getRecipes(){
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
    
}