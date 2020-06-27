/*Service para realizar as conexões com a api */
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Data } from '../models/data';
import { Mundo } from '../models/mundo';

@Injectable({
  providedIn: 'root'
})
export class SarscovDashboardService {
  urlBrasil = 'https://api.covid19api.com/country/brazil/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-07-01T00:00:00Z'; // link para acessar os casos no Brasil
  urlMundo = 'https://api.covid19api.com/summary' /* Casos no mundo*/
  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  getCasosnoBrasil(): Observable<Data[]> {
    return this.httpClient.get<Data[]>(this.urlBrasil)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }
  getCasosMundo(): Observable<Mundo[]> {
    return this.httpClient.get<Mundo[]>(this.urlMundo)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
