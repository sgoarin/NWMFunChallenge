import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppConfig } from "./classes/appConfig";

@Injectable()
export class ConfigurationService {

  constructor(private http: HttpClient) { }

  getSettings(): Observable<AppConfig> {
    return this.http.get("/src/app/config/appconfig.json")
      .map(this.extractData)
      .catch(this.handleErrors);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  private handleErrors(error: any): Observable<any> {
    return Observable.throw(error.message || error);
  }

}
