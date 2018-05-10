import { Injectable, Inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';


//import { ConfigurationService } from '../../configuration.service';
import { error } from 'selenium-webdriver';
import { Request } from '@angular/http/src/static_request';


@Injectable()
export class Interceptor implements HttpInterceptor {
  //private baseUrl: string;
  constructor() { }

  private newReq: any;
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    //const idToken = localStorage.getItem("jwToken");

    //if (idToken) {
    //  this.newReq = req.clone({
    //    url: "api/" + req.url,
    //    headers: req.headers.set('Content-Type', 'application/json')
    //      .set("Authorization", "Bearer " + idToken)
    //  });
    //}
    //else {
      this.newReq = req.clone({
        url: "api/" + req.url
      });
    //}


    return next.handle(this.newReq)
      .catch(err => {

        if (err.status === 504) {
          {
            return Observable.throw("Connection unavailable - Make sure you're connected to the Internet.");
          }
        }
        else { return Observable.throw(err); }

      }) as any;

  }
}
