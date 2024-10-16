import { Component } from '@angular/core';
import { CounterService } from './api/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quiz-project';

  constructor(public counterService: CounterService) {}
}
