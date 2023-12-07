import { Component, Input, OnInit } from '@angular/core';
import { Cv } from '../../models/cv';
import { CvService } from '../../services/cv.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { map, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent implements OnInit {
  constructor(
    private cvService: CvService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //this.cvs = this.activatedRoute.snapshot.data['cvs'];
    // this.activatedRoute.data.subscribe((data) => {
    //   this.cvs = data['cvs'];
    // });
    this.activatedRoute.data
      .pipe(
        map((data) => data['cvs']),
        tap((cvs) => {
          this.cvs = cvs;
        })
      )
      .subscribe();
  }

  @Input() cvs: Cv[] = [];

  selectedCv: Cv | null = null;

  selectCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
