import { Component, OnInit } from '@angular/core';
import { Ingrident } from '../shared/ingrients.model';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingridents: Ingrident[]=[
    new Ingrident('ingrient 1',50)


];
  constructor() { }

  ngOnInit() {
  }

}
