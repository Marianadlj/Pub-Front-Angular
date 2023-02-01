import { usuario } from './../../interfaces/usuario';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit{

  @Output() onSubmit = new EventEmitter<usuario>();
  @Input() usuarioData: usuario | null = null;
  @Input() btnText!: string;

  loginForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    if (this.usuarioData) {
      console.log(this.usuarioData);
      this.loginForm = new FormGroup({
        nome: new FormControl(this.usuarioData.nome, [Validators.required]),
        email: new FormControl(this.usuarioData.email, [Validators.required]),
        cpf: new FormControl(this.usuarioData.cpf, [Validators.required]),
        telefone: new FormControl(this.usuarioData.telefone, [Validators.required]),
        senha: new FormControl(this.usuarioData.senha, [Validators.required,])
      });
      } else {
      this.loginForm = new FormGroup({
        nome: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        cpf: new FormControl('', [Validators.required]),
        telefone: new FormControl('', [Validators.required]),
        senha: new FormControl('', [Validators.required]),
      });
    }
  }

  get nome() {
    return this.loginForm.get('nome')!;
  }

  get email() {
    return this.loginForm.get('email')!;
  }

  get cpf() {
    return this.loginForm.get('cpf')!;
  }

  get telefone() {
    return this.loginForm.get('telefone')!;
  }

  get senha() {
    return this.loginForm.get('senha')!;
  }
  submit() {
    if (this.loginForm.invalid) {
      return;
    }

    console.log(this.loginForm.value);

    this.onSubmit.emit(this.loginForm.value);
  }
}
