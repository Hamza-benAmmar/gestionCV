import { Component, OnInit } from '@angular/core';
import { Cv } from '../../models/cv';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  Observable,
  catchError,
  distinctUntilChanged,
  of,
  switchMap,
} from 'rxjs';
import { CvService } from '../../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  cvs: Observable<Cv[]>;

  searchForm: FormGroup;

  constructor(private cvService: CvService, private router: Router) {
    this.searchForm = new FormGroup({
      search: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.cvs = this.searchForm.get('search').valueChanges.pipe(
      distinctUntilChanged(),
      switchMap((input: string) => {
        if (input) {
          return this.cvService.getCvByName(input);
        } else {
          return of([]);
        }
      }),
      catchError((error) => {
        console.error('Error fetching CVs:', error);
        return of([]);
      })
    );
  }
  onSelectCv(cv: Cv) {
    const params = cv.id;
    this.router.navigate(['cv', params]);
  }
}
