import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class HttpinterceptorService implements HttpInterceptor{
    constructor(){}
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
        let jwToken = localStorage.getItem('token');
        req = req.clone({
          setHeaders: {
            sampleHeader: 'Sample',
          },
        });
     
        if (jwToken) {
          req = req.clone({
            setHeaders: {
              Autherization: jwToken,
            },
          });
        }
     
        console.log(req);
        return next.handle(req);
      }
    }