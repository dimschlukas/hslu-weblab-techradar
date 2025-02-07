import { Routes } from '@angular/router';
import { LoginComponent } from './routes/auth/login/login.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
];
