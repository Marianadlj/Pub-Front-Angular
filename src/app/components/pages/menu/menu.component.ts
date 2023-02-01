import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  itens = [
    {id: 1, name: 'Mojito'},
    {id: 2, name: 'Pizza'},
    {id: 3, name: 'Batata'}
  ];

}
