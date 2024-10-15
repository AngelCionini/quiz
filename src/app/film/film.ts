export interface FilmResult {
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
    mix_answers: string[];
    selected_answer: string;
    is_answered: boolean;
  }
  
  export class Film {
    response_code!: number;
    results!: FilmResult[];
  }