import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
 
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeRouterModule } from './recipes/recipe-router.module';
import { DishesComponent } from './dishes/dishes.component';
import { DishdetailsComponent } from './dishes/dishdetails/dishdetails.component';
import { DishEditComponent } from './dishes/dish-edit/dish-edit.component';
import { DishListComponent } from './dishes/dish-list/dish-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    ShoppingEditComponent,
    ShoppingListComponent,
    HomeComponent,
    DishesComponent,
    DishdetailsComponent,
    DishEditComponent,
    DishListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecipeRouterModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
