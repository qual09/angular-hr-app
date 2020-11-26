import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// MOCK
import { RECRUITMENTS } from '../mocks/mock-recruitments'
import { Recruitment } from '../models/recruitment';

@Injectable({
  providedIn: 'root'
})
export class RecruitmentService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // alert(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getRecruitmentList(): Observable<Recruitment[]> {
    //MOCK
    return of(RECRUITMENTS);

    const url = 'localhost:8080/recruitments';
    return this.http.get<Recruitment[]>(url).pipe(
      tap(() => console.log('### getRecruitmentList ### getRecruitmentList')),
      catchError(this.handleError<Recruitment[]>('getRecruitmentList', []))
    );
  }

  getRecruitment(id: string): Observable<Recruitment> {
    //MOCK
    const recruitment = RECRUITMENTS.filter((recruitment) => recruitment.id === id);
    return of(recruitment[0]);

    const url = `localhost:8080/recruitments/${id}`;
    return this.http.get<Recruitment>(url).pipe(
      tap(() => console.log('### getRecruitment ### getRecruitment')),
      catchError(this.handleError<Recruitment>('getRecruitment'))
    );
  }
}
