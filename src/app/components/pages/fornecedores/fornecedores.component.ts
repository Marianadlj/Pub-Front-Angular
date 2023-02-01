import { Component } from '@angular/core';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css']
})
export class FornecedoresComponent {

  itens = [
    {id: 1, name: 'Mojito'},
    {id: 2, name: 'Pizza'},
    {id: 3, name: 'Batata'}
  ];
}
