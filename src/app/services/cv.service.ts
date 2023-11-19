import { Injectable } from '@angular/core';
import { Cv } from '../models/cv';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[];
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
  getCvs(): Observable<Cv[]> {
    this.http.get<Cv[]>('https://apilb.tridevs.net/api/personnes').subscribe(
      (response) => {},
      (error) => {
        console.log(error);
      }
    );
    return this.http.get<Cv[]>('https://apilb.tridevs.net/api/personnes');
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
