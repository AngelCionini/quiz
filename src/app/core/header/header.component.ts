import { Component } from '@angular/core';
import { DifficultyEnum } from '../../models/quiz.model';
import { CounterService } from '../../api/counter.service';

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
