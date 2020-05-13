import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    handler: HttpHandler
  ): Observable<HttpEvent<any>> {
    let modifiedReq = req.clone({
      setHeaders: { "Content-Type": "application/json" },
    });

    return handler.handle(modifiedReq);
  }
}
