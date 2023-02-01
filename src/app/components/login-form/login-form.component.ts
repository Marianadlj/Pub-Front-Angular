import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { login } from 'src/app/interfaces/login';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<login>();
  @Input() loginData: login | null = null;
  @Input() btnText!: string;

  loginForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    if (this.loginData) {
      console.log(this.loginData);
      this.loginForm = new FormGroup({
        email: new FormControl(this.loginData.email, [Validators.required]),
        senha: new FormControl(this.loginData.senha, [Validators.required,])
      });
      } else {
      this.loginForm = new FormGroup({
        email: new FormControl('', [Validators.required]),
        senha: new FormControl('', [Validators.required])
      });
    }
  }

  get email() {
    return this.loginForm.get('email')!;
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

