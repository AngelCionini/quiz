import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../api/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnInit{

//  @Input({required: true}) questionario!: QuizResult[];
//  @Input({required: true}) currentCount!: number;

counterIsVisible!: boolean;
currentCount: number = 0;
questionarioLenght: number = 0;

constructor(
  private counterService: CounterService
) {}


ngOnInit() {

  this.counterService.currentCount.subscribe(
    (valore) => {
      this.currentCount = valore;
    }
  )
  this.counterService.questionarioCount.subscribe(
    (valore) => {
      this.questionarioLenght = valore;
    }
  );
}

}
