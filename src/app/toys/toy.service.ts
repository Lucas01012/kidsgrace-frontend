import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Toy } from './models/toy';

@Injectable({ providedIn: 'root' })
export class ToyService {
  private apiUrl = 'http://localhost:8080/toys';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Toy[]> {
    return this.http.get<Toy[]>(`${this.apiUrl}/findAll`);
  }

  findByName(name: string): Observable<Toy[]> {
    return this.http.get<Toy[]>(`${this.apiUrl}/findByName/${name}`);
  }

  adicionarBrinquedo(toyData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}`, toyData);
  }

  // Caso deseje uma versão para adicionar brinquedo sem imagem:
  adicionarBrinquedoSimples(toy: Toy): Observable<Toy> {
    return this.http.post<Toy>(`${this.apiUrl}`, toy);
  }
}
