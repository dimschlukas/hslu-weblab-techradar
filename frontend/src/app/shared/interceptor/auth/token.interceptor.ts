import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../../services/auth/auth.service';
import { inject } from '@angular/core';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();
  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
  return next(req);
};
