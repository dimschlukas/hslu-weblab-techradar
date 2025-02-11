import { Routes } from '@angular/router';
import { LoginComponent } from './routes/auth/login/login.component';
import { RegisterComponent } from './routes/auth/register/register.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { authGuard } from './shared/guards/auth/auth.guard';
import { loggedInAuthGuard } from './shared/guards/auth/logged-in-auth.guard';
import { AdministrationComponent } from './routes/administration/administration.component';
import { adminAuthGuard } from './shared/guards/auth/admin-auth.guard';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent, canActivate: [loggedInAuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [loggedInAuthGuard] },
  { path: 'admin', component: AdministrationComponent, canActivate: [adminAuthGuard] },
  { path: '', component: DashboardComponent, canActivate: [loggedInAuthGuard] }
];
