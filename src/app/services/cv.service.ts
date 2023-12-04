import { Injectable } from '@angular/core';
import { Cv } from '../models/cv';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, of, share, tap } from 'rxjs';

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
  private cvListObservable$: Observable<Cv[]>;

  /*getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(this.url).pipe(
      tap((data) => {
        this.cvs = data;
        console.log('emitting');
        this.cvsSubject.next(data);
      }),
      catchError((error) => {
        console.log(error);
        return of(this.cvs);
      })
    );
  }*/
  getCvs(): Observable<Cv[]> {
    const cvListObservable$ = this.http.get<Cv[]>(this.url).pipe(
      tap((data: Cv[]) => {
        this.cvsSubject.next(data);
      }),
      catchError((error) => {
        console.error('Error fetching CVs:', error);
        return of([]);
      }),
      share()
    );
    return cvListObservable$;
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
  addCv(cv: Cv) {
    console.log('in the add cv function');
    console.log(cv);
    return this.http.post(this.url, cv);
  }

  updateCv(cv: Cv) {
    console.log(cv);
    return this.http.patch(this.url, cv);
  }
}
