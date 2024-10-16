export interface QuizResult {
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
  
  export interface Quiz {
    response_code: number;
    results: QuizResult[];
  }

  export enum DifficultyEnum {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
  }