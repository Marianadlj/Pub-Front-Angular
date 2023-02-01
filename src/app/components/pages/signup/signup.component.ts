import { UsuarioService } from './../../../services/usuario.service';
import { usuario } from './../../../interfaces/usuario';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  ngOnInit(): void {}

  constructor(private UsuarioService : UsuarioService){}

  btnText: string = 'Inscrever-se';

  async createHandler(usuario : usuario){
      const formData = new FormData();

      formData.append('nome', usuario.nome);
      formData.append('email', usuario.email);
      formData.append('cpf', usuario.cpf);
      formData.append('telefone', usuario.telefone);
      formData.append('senha', usuario.senha);

      await this.UsuarioService.createUsuario(formData).subscribe;
  }
}
