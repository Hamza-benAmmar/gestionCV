import { Component, Input, OnInit } from '@angular/core';
import { Cv } from '../../models/cv';
import { CvService } from '../../services/cv.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

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
    /*this.cvService.getCvs().subscribe({
      next: (data) => {
        this.cvs = data;
      },
      error: (error) => {
        this.toastrService.error(
          'could not fetch the api , i will be using fakers',
          'error',
          {
            timeOut: 2000,
          }
        );
        this.cvs = this.cvService.getFakers();
      },
    });*/
    //this.cvs = this.activatedRoute.snapshot.data['cvs'];
    this.activatedRoute.data.subscribe((data) => {
      this.cvs = data['cvs'];
    });
  }

  @Input() cvs: Cv[] = [];

  selectedCv: Cv | null = null;

  selectCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
