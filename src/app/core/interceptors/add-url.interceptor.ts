import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const addUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const modifiedReq = req.clone({
    url: `${environment.baseUrl}${req.url}`,
  });
  return next(modifiedReq);
};
