import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DifficultyEnum, QuizResult } from '../quiz.model';
import { QuizService } from '../quiz.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrl: './film.component.scss'
})
export class FilmComponent {
  constructor(
    private quizService: QuizService,
    private activatedRoute: ActivatedRoute,
    private counterService: CounterService
  ) {}

  questionario: QuizResult[] = [];
  level: DifficultyEnum = DifficultyEnum.EASY;
  category: string = '';
  counterCount: number = 0;
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
    this.counterCount = currentCount;
    this.counterService.updateCounter(currentCount);
  }

}
