import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RecipesModule } from "./recipes/recipes.module";

const appRoutes: Routes=[
{path:'',component:HomeComponent},
//{path:'recipes',loadChildren:'./recipes/recipes.module#RecipesModule'}
{path:'recipes',component :RecipesModule}

]
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{}