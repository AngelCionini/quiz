import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  questionarioLenght = new BehaviorSubject(0);
  currentCount = new BehaviorSubject(0);
  counterVisible!: boolean;

  constructor() { }

  updateCounter(currentCount: number) {
    this.currentCount.next(currentCount);
  }

  setQuizCount(questionarioLenght: number) {
    this.questionarioLenght.next(questionarioLenght);
  }

  setCounterVisible() {
    this.counterVisible = true;
  }

  setCountInvisible() {
    this.counterVisible = false;
  }

  get currentCounter() {
    return this.currentCount;
  }

  get questionarioCount() {
    return this.questionarioLenght;
  }

  get counterIsVisible() {
    return this.counterVisible;
  }

  resetCounter() {
    this.currentCount.next(0);
    this.questionarioLenght.next(0);
  }
}
