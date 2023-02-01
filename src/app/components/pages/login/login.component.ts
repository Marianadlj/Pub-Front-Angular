import { LoginService } from './../../../services/login.service';
import { login } from 'src/app/interfaces/login';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}

  btnText: string = 'Entrar';

  constructor(private loginService: LoginService){}

  async createHandler(login : login){
      const formData = new FormData();

      formData.append('email', login.email);
      formData.append('senha', login.senha);


      await this.loginService.fazLogin(formData).subscribe;
  }

}

