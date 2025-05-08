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
      foto: 'assets/team/MC.webp'
    },
    {
      nome: 'Leonardo Costa',
      cargo: 'UI/UX Designer',
      foto: 'assets/team/L.webp'
    },
    {
      nome: 'Alisson Mayer',
      cargo: 'Desenvolvedor Backend',
      foto: 'assets/team/ALI.webp'
    },
    {
      nome: 'Gabriel Barsani',
      cargo: 'Desenvolvedor Backend',
      foto: 'assets/team/GF.webp'
    },
    {
      nome: 'Bruno Araujo',
      cargo: 'Desenvolvedor Backend',
      foto: 'assets/team/BRU.webp'
    },
    {
      nome: 'Henrique Porto',
      cargo: 'QA Engineer',
      foto: 'assets/team/KAN.webp'
    },
    {
      nome: 'Henrique Barreto',
      cargo: 'Scrum Master',
      foto: 'assets/team/BART.webp'
    }
  ];

  constructor(private router: Router){
  }

  irParaHome(event: Event){
    event.preventDefault();
    this.router.navigate(['home'])
  }
}
