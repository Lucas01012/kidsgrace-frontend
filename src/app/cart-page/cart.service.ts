import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface ProdutoCarrinho {
  id: number;
  nome: string;
  preco: number;
  parcelamento: string;
  imagem: string;
  quantidade: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private carrinhoSubject = new BehaviorSubject<ProdutoCarrinho[]>([]);
  carrinho$ = this.carrinhoSubject.asObservable();

  private quantidadeTotalSubject = new BehaviorSubject<number>(0);
  quantidadeTotal$ = this.quantidadeTotalSubject.asObservable();

  adicionarProduto(produto: any) {
    const carrinhoAtual = this.carrinhoSubject.value;
    const itemExistente = carrinhoAtual.find(item => item.id === produto.id);
    const precoNumerico = parseFloat(produto.preco.replace('R$ ', '').replace(',', '.'));

    if (itemExistente) {
      const novoCarrinho = carrinhoAtual.map(item => {
        if (item.id === produto.id) {
          return { ...item, quantidade: item.quantidade + produto.quantidade };
        }
        return item;
      });
      this.carrinhoSubject.next(novoCarrinho);
    } else {
      this.carrinhoSubject.next([...carrinhoAtual, { ...produto, preco: precoNumerico }]);
    }

    this.atualizarQuantidadeTotal();
  }

  removerProduto(produto: ProdutoCarrinho) {
    const carrinhoAtual = this.carrinhoSubject.value;
    const novoCarrinho = carrinhoAtual.filter(item => item.id !== produto.id);
    this.carrinhoSubject.next(novoCarrinho);

    this.atualizarQuantidadeTotal();
  }

  atualizarQuantidade(produto: ProdutoCarrinho, quantidade: number) {
    const carrinhoAtual = this.carrinhoSubject.value;
    const novoCarrinho = carrinhoAtual.map(item => {
      if (item.id === produto.id) {
        return { ...item, quantidade: quantidade };
      }
      return item;
    });
    this.carrinhoSubject.next(novoCarrinho);

    this.atualizarQuantidadeTotal();
  }

  limparCarrinho() {
    this.carrinhoSubject.next([]);
    this.quantidadeTotalSubject.next(0);
  }

  getTotal() {
    const carrinhoAtual = this.carrinhoSubject.value;
    return carrinhoAtual.reduce((total, item) => total + item.preco * item.quantidade, 0);
  }

  private atualizarQuantidadeTotal() {
    const carrinhoAtual = this.carrinhoSubject.value;
    const quantidadeTiposProdutos = carrinhoAtual.length;
    this.quantidadeTotalSubject.next(quantidadeTiposProdutos);
  }
  
}