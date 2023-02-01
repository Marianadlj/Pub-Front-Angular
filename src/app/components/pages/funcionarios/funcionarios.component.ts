import { Component } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent {

  eventos = [
    {id: 1, name: 'Gabriel'},
    {id: 2, name: 'Pedro'},
    {id: 3, name: 'Julia'}
  ];
}
