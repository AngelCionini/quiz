import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DifficultyEnum, QuizResult } from '../quiz.model';
import { QuizService } from '../quiz.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrl: './videogames.component.scss',

})
export class VideogamesComponent implements OnInit{
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

}
