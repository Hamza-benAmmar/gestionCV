import { Component, Input, OnInit } from '@angular/core';
import { CvService } from '../../services/cv.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';
import { Cv } from '../../models/cv';

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
