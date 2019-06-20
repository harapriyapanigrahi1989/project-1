import { NgModule } from "@angular/core";
import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from '../recipes/recipe-details/recipe-details.component';
import { RecipeListComponent } from '../recipes/recipe-list/recipe-list.component';
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[

        RecipesComponent,
        RecipeEditComponent,
        RecipeDetailsComponent,
        RecipeListComponent

    ],
    imports:[
        CommonModule,
        SharedModule
    ]


})
export class RecipesModule{

}