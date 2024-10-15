import { Component } from '@angular/core';
import { DifficultyEnum } from '../quiz.model';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  difficulty = DifficultyEnum;
  
  constructor(private counterService: CounterService) {}

  onClickInvisible() {
    this.counterService.resetCounter();
    this.counterService.setCountInvisible();
  }
}
