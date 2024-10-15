import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../quiz.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AnswerDialogComponent } from '../answer-dialog/answer-dialog.component';
import { QuizResult } from '../quiz.model';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrl: './questionario.component.scss'
})
export class QuestionarioComponent {
  constructor(
    private sanitizer: DomSanitizer,
    private dialog: MatDialog
  ) {}
  
  @ViewChild('form') form!: NgForm;
  @Input({required: true}) questionario!: QuizResult[];

  correctAnswersCount: number = 0;
  @Output() counterCount = new EventEmitter<number>();

  sanitizeHtml(text: string) {
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }
 
  onSubmit() {
    if (this.form.valid) {
      this.correctAnswersCount = this.questionario.filter(
        element => element.selected_answer === element.correct_answer).length;
  
      this.dialog.open(AnswerDialogComponent, {
          data: {
            correctAnswers: this.correctAnswersCount,
            totalQuestions: this.questionario.length
          }
        });
    } else {
      window.alert('Il questionario deve essere completato prima di essere inviato');
    }
  }

  updateCorrectAnswersCount() {
    this.correctAnswersCount = this.questionario.filter(
      (element) => element.selected_answer === element.correct_answer
    ).length;
    this.counterCount.emit(this.correctAnswersCount);
  }

}
