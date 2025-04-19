import { Component } from '@angular/core';
import { FooterGenericComponent } from '../footer-generic/footer-generic.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-team-info',
  imports: [CommonModule,FooterGenericComponent],
  templateUrl: './team-info.component.html',
  styleUrl: './team-info.component.scss'
})
export class TeamInfoComponent {
  equipe = [
    {
      nome: 'Lucas Oliveira',
      cargo: 'Desenvolvedor Front-End',
      foto: 'https://via.placeholder.com/150'
    },
    {
      nome: 'Leonardo Costa',
      cargo: 'UI/UX Designer',
      foto: 'https://via.placeholder.com/150'
    },
    {
      nome: 'Alisson Meyer',
      cargo: 'Desenvolvedor Backend',
      foto: 'https://via.placeholder.com/150'
    },
    {
      nome: 'Gabriel Barsani',
      cargo: 'Desenvolvedor Backend',
      foto: 'https://via.placeholder.com/150'
    },
    {
      nome: 'Bruno Araujo',
      cargo: 'Desenvolvedor Backend',
      foto: 'https://via.placeholder.com/150'
    },
    {
      nome: 'Henrique Porto',
      cargo: 'QA Engineer',
      foto: 'https://via.placeholder.com/150'
    },
    {
      nome: 'Henrique Barreto',
      cargo: 'Scrum Master',
      foto: 'https://via.placeholder.com/150'
    }
  ];

  constructor(private router: Router){
  }

  irParaHome(event: Event){
    event.preventDefault();
    this.router.navigate(['home'])
  }
}
