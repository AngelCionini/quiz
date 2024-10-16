import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CounterService } from '../../api/counter.service';
import { DifficultyEnum, QuizResult } from '../../models/quiz.model';
import { QuizService } from '../../api/quiz.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(
    private activatedRoute: ActivatedRoute,
    private quizService: QuizService,
    private counterService: CounterService
  ) {}

  questionario: QuizResult[] = [];
  level: DifficultyEnum = DifficultyEnum.EASY;
  category: string = '';
  isLoading!: boolean;

  ngOnInit() {
    this.isLoading = true;
    this.activatedRoute.queryParams.subscribe(
      params => {
        this.level = params['level'];
        this.category = params['category'];
        this.quizService.getAllQuestions(this.category, this.level)
        .subscribe({
          next : (risultato) => {
            this.questionario = risultato.results;
            this.isLoading = false;
            this.counterService.resetCounter();
            this.counterService.setQuizCount(this.questionario.length);
            this.counterService.setCounterVisible();
          }
        });;
      }

    )
  }

  updateCount(currentCount: number) {
    this.counterService.updateCounter(currentCount);
  }

  getCategoryName(category: string) {
    switch (category) {
      case "11":
        return 'Film';
      case "15":
        return 'Videogames';
      case "10":
        return 'Libri';
      default:
        return 'Categoria sconosciuta';
    }
  }

  getDifficultyLevel(level: DifficultyEnum) {
    switch (level) {
      case "easy":
        return 'Facile';
      case "medium":
        return 'Medio';
      case "hard":
        return 'Difficile';
      default:
        return 'Facile';
    }
  }

}
