import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

import { login } from '../interfaces/login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseApi = environment.baseApiUrl;
  private apiLogin= `${this.baseApi}login`;

  constructor(private http: HttpClient) { }

  fazLogin(formData : FormData): Observable<FormData>{
    return this.http.post<FormData>(this.apiLogin, formData)
  }
}
