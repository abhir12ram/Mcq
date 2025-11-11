import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuestionBankComponent } from './components/question-bank/question-bank.component';
import { CreateTestComponent } from './components/create-test/create-test.component';
import { TestRunnerComponent } from './components/test-runner/test-runner.component';
import { TestResultsComponent } from './components/test-results/test-results.component';

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, title: 'Home | AI MCQ' },
  { path: 'questions', component: QuestionBankComponent, title: 'Question Bank | AI MCQ' },
  { path: 'create-test', component: CreateTestComponent, title: 'Create Test | AI MCQ' },
  { path: 'test-runner', component: TestRunnerComponent, title: 'Test in Progress | AI MCQ' },
  { path: 'results', component: TestResultsComponent, title: 'Test Results | AI MCQ' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
