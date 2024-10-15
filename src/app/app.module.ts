import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { VideogamesComponent } from './videogames/videogames.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LibriComponent } from './libri/libri.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { FilmComponent } from './film/film.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AnswerDialogComponent } from './answer-dialog/answer-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { QuestionarioComponent } from './questionario/questionario.component';
import { CounterComponent } from './counter/counter.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideogamesComponent,
    LibriComponent,
    NotFoundComponent,
    HomeComponent,
    FilmComponent,
    AnswerDialogComponent,
    QuestionarioComponent,
    CounterComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    MatMenuModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatRadioModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
})
export class AppModule {}
