import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscaService {
  private termoBuscaSource = new BehaviorSubject<string>('');
  termoBusca$ = this.termoBuscaSource.asObservable();

  atualizarTermoBusca(termo: string) {
    this.termoBuscaSource.next(termo);
  }
}