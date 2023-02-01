import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private baseApi = environment.baseApiUrl;
  private apiEvento= `${this.baseApi}eventos`;

  constructor(private http: HttpClient) { }

  createEvento(formData : FormData): Observable<FormData>{
    return this.http.post<FormData>(this.apiEvento, formData);
  }
}
