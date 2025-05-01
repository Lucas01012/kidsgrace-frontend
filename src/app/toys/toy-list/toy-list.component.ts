import { Component, OnInit } from '@angular/core';
import { ToyService } from '../toy.service';
import { Toy } from '../models/toy';

@Component({
  selector: 'app-toy-list',
  imports: [],
  templateUrl: './toy-list.component.html',
  styleUrl: './toy-list.component.scss'
})
export class ToyListComponent implements OnInit {
  toys: Toy[] = [];

  constructor(private toyService: ToyService) {}

  ngOnInit() {
    this.toyService.findAll().subscribe({
      next: toys => this.toys = toys,
      error: err => console.error('Erro ao buscar brinquedos', err)
    });
  }
}
