// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/users'; // URL da sua API de cadastro

  constructor(private http: HttpClient) {}

  cadastrar(usuario: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, usuario);
  }

  login(usuario: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, usuario);
  }
}
