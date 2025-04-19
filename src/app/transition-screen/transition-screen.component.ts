import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transition-screen',
  standalone: true,
  templateUrl: './transition-screen.component.html',
  styleUrl: './transition-screen.component.scss',
  imports:[CommonModule]
})
export class TransitionScreenComponent implements OnInit {
  @Input() mostrar: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.mostrar = false;
    }, 2000);
  }
}
