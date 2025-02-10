import { Routes } from '@angular/router';
import { LoginComponent } from './routes/auth/login/login.component';
import { RegisterComponent } from './routes/auth/register/register.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { authGuard } from './shared/guards/auth/auth.guard';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];
