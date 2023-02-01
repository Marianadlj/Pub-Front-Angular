import { eventos } from './../../../interfaces/evento';
import { EventoService } from './../../../services/evento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit{
  ngOnInit(): void {}

  btnText: string = 'Criar';

  constructor(private EventoService: EventoService){}

  async createHandler(eventos : eventos){
    const formData = new FormData();

    formData.append('nome', eventos.nome);
    formData.append('foto', eventos.foto);
    formData.append('descricao', eventos.descricao);
    formData.append('dataInicio', eventos.dataInicio);
    formData.append('dataFim', eventos.dataFim);
    formData.append('horaInicio', eventos.horaInicio);
    formData.append('horaFim', eventos.horaFim);


    await this.EventoService.createEvento(formData).subscribe;
}

  eventos = [
    {id: 1, name: 'Gabriel'},
    {id: 2, name: 'Pedro'},
    {id: 3, name: 'Julia'}
  ];
}
