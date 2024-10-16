import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { HomeComponent } from './views/home/home.component';
import { QuestionarioComponent } from './views/questionario/questionario.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';


export const routes: Routes = [
    {
      path: 'quiz',
      component: QuestionarioComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
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