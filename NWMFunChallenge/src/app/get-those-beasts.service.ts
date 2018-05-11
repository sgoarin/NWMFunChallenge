import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Response } from '@angular/http/src/static_response';
import { BeastApi } from './classes/BeastApi';

@Injectable()
export class GetThoseBeastsService {

  beastApi: BeastApi;
  url: string = "https://api.publicapis.org/categories";

  constructor(private http: HttpClient) { }

  getTheBeasts(): Observable<string[]> {
      return this.http.get<string[]>(`${this.url}`)
        .pipe(
        tap(projects => console.log("fetched projects")),
        catchError(this.handleError('getProjects', []))
        );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}


