import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { VideogamesComponent } from './videogames/videogames.component';
import { LibriComponent } from './libri/libri.component';
import { FilmComponent } from './film/film.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { QuestionarioComponent } from './questionario/questionario.component';
import { DifficultyEnum } from './quiz.model';

export const routes: Routes = [
    {
        path: 'videogames',
        component: VideogamesComponent
    },
    {
      path: 'film',
      component: FilmComponent
    },
    {
      path: 'libri',
      component: LibriComponent
    },
    {
      path: 'quiz',
      component: QuestionarioComponent
    },
    {
      path: 'home',
      component: HomeComponent,
      title: 'Home'
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: '**',
      component: NotFoundComponent
    },
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }