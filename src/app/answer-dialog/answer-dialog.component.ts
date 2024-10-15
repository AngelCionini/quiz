import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-answer-dialog',
  templateUrl: './answer-dialog.component.html',
  styleUrl: './answer-dialog.component.scss'
})
export class AnswerDialogComponent implements OnInit{
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { correctAnswers: number; totalQuestions: number },
    private dialogRef: MatDialogRef<AnswerDialogComponent>,
    private router: Router,
    private counterService: CounterService
  ) {}

  risultato: string = '';

  ngOnInit() {
    if(this.data.correctAnswers <= this.data.totalQuestions / 3) {
      this.risultato = "Prova ancora! "
    } else if(this.data.correctAnswers <= this.data.totalQuestions / 2) {
      this.risultato = "Ci sei quasi..."
    } else if(this.data.correctAnswers <= this.data.totalQuestions - 2) {
      this.risultato = "Complimenti!!"
    } else if(this.data.correctAnswers == this.data.totalQuestions) {
      this.risultato = "Super!!"
    }
  }

  onClose(): void {
    this.dialogRef.close();
    this.counterService.resetCounter();
    this.counterService.setCountInvisible();
    this.router.navigate(['home']);
  }


}
