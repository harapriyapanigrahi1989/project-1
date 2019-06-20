import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipesModule } from "./recipes.module";
import { RecipesComponent } from "./recipes.component";

const routes:Routes = [
    {path:'recipes',component:RecipesComponent,children:[
        {path:'recipe-edit',component:RecipeEditComponent},
        {path:'recipe-details',component:RecipeDetailsComponent},
        {path:'recipe-list',component:RecipeListComponent}
    ] }
];

@NgModule({

    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RecipesModule]

})
export class RecipeRouterModule{
}