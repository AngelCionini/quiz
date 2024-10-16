import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { QuizResult, DifficultyEnum, Quiz } from "../models/quiz.model";

@Injectable({
    providedIn: 'root'
  })
  export class QuizService {

    constructor(private http: HttpClient) {}

    getAllQuestions(category: string, level: DifficultyEnum) {
        return this.http.get<Quiz>
        (`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${level}&type=multiple`)
        .pipe(
          map(
            (response) => {
              response.results.flatMap(
                result => {
                  const combinedAnswers = [result.correct_answer, ...result.incorrect_answers]
                  result.mix_answers = this.shuffle(combinedAnswers);
                }
              )
              return response;
            }
          )
        )
    }

    shuffle(array: string[]): string[] {
      return array.sort(() => Math.random() - 0.5);
    }
  }