import { Injectable } from '@angular/core';
import { Cv } from '../models/cv';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import {
  BehaviorSubject,
  Observable,
  catchError,
  of,
  tap,
  throwError,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[];
  private url: string = 'https://apilb.tridevs.net/api/personnes';
  constructor(private http: HttpClient) {
    this.cvs = [
      new Cv(
        1,
        'Ben Ammar',
        'Hamza',
        'rotating_card_profile3.png',
        22,
        'student'
      ),
      new Cv(2, 'Gaidi', 'Emna', 'rotating_card_profile2.png', 22, 'student'),
    ];
  }
  cvsSubject = new BehaviorSubject<Cv[]>(null);
  cvs$ = this.cvsSubject.asObservable();

  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(this.url).pipe(
      tap((data) => {
        this.cvs = data;
        this.cvsSubject.next(data);
      }),
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }
  getCvByName(name: string): Observable<Cv[]> {
    const params = new HttpParams().set(
      'filter',
      JSON.stringify({ where: { name: { like: `%${name}%` } } })
    );
    return this.http.get<Cv[]>(this.url, { params });
  }
  getFakers(): Cv[] {
    return this.cvs;
  }

  getCvById(id: number): Observable<Cv | undefined> {
    const url = `https://apilb.tridevs.net/api/personnes/${id}`;
    console.log(this.http.get<Cv>(url));
    return this.http.get<Cv>(url);
  }
  deleteCv(id: number): Observable<void> {
    const deleteUrl = `https://apilb.tridevs.net/api/personnes/${id}`;
    return this.http.delete<void>(deleteUrl);
  }
}
