import { Routes } from '@angular/router';
import { LoginComponent } from './routes/auth/login/login.component';
import { RegisterComponent } from './routes/auth/register/register.component';
import { ViewerComponent } from './routes/viewer/viewer.component';
import { authGuard } from './shared/guards/auth/auth.guard';
import { loggedInAuthGuard } from './shared/guards/auth/logged-in-auth.guard';
import { AdministrationComponent } from './routes/administration/administration.component';
import { adminAuthGuard } from './shared/guards/auth/admin-auth.guard';
import { AddTechnologyComponent } from './routes/administration/add-technology/add-technology.component';
import { TechnologyDetailComponent } from './routes/technology-detail/technology-detail.component';

export const routes: Routes = [
  { path: 'viewer', component: ViewerComponent, canActivate: [authGuard] },
  { path: 'detail/:id', component: TechnologyDetailComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent, canActivate: [loggedInAuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [loggedInAuthGuard] },
  { path: 'admin', component: AdministrationComponent, canActivate: [adminAuthGuard] },
  {
    path: 'admin/add-technology',
    component: AddTechnologyComponent,
    canActivate: [adminAuthGuard]
  },
  { path: '**', redirectTo: '/viewer', pathMatch: 'full' }
];
