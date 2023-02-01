import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

import { usuario } from '../interfaces/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseApi = environment.baseApiUrl;
  private apiUser= `${this.baseApi}usuarios`;

  constructor(private http: HttpClient) { }

  createUsuario(formData : FormData): Observable<FormData>{
    return this.http.post<FormData>(this.apiUser, formData);
  }
}
