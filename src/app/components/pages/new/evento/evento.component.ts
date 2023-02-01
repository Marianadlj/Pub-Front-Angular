import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { eventos } from 'src/app/interfaces/evento';
import { login } from 'src/app/interfaces/login';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit{

  @Output() onSubmit = new EventEmitter<eventos>();
  @Input() eventoData: eventos | null = null;
  @Input() btnText!: string;

  eventoForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    if (this.eventoData) {
      console.log(this.eventoData);
      this.eventoForm = new FormGroup({
        nome: new FormControl(this.eventoData.nome, [Validators.required]),
        foto: new FormControl(this.eventoData.nome, [Validators.required]),
        descricao: new FormControl(this.eventoData.nome, [Validators.required]),
        dataInicio: new FormControl(this.eventoData.nome, [Validators.required]),
        dataFim: new FormControl(this.eventoData.nome, [Validators.required]),
        horaInicio: new FormControl(this.eventoData.nome, [Validators.required]),
        horaFim: new FormControl(this.eventoData.nome, [Validators.required]),

      });
      } else {
      this.eventoForm = new FormGroup({
        nome: new FormControl('', [Validators.required]),
        foto: new FormControl('', [Validators.required]),
        descricao: new FormControl('', [Validators.required]),
        dataInicio: new FormControl('', [Validators.required]),
        dataFim: new FormControl('', [Validators.required]),
        horaInicio: new FormControl('', [Validators.required]),
        horaFim: new FormControl('', [Validators.required])
      });
    }
  }

  get nome() {
    return this.eventoForm.get('nome')!;
  }

  get foto() {
    return this.eventoForm.get('foto')!;
  }
  get descricao() {
    return this.eventoForm.get('descricao')!;
  }
  get dataInicio() {
    return this.eventoForm.get('dataInicio')!;
  }

  get dataFim() {
    return this.eventoForm.get('dataFim')!;
  }

  get horaInicio() {
    return this.eventoForm.get('horaInicio')!;
  }

  get horaFim() {
    return this.eventoForm.get('horaFim')!;
  }

  submit() {
    if (this.eventoForm.invalid) {
      return;
    }

    console.log(this.eventoForm.value);

    this.onSubmit.emit(this.eventoForm.value);
  }
}

