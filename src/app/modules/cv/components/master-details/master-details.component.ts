import { Component, Input, OnInit } from '@angular/core';
import { Cv } from '../../models/cv';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../../../../services/cv.service';
import { Observable, catchError, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-master-details',
  templateUrl: './master-details.component.html',
  styleUrl: './master-details.component.css',
})
export class MasterDetailsComponent implements OnInit {
  constructor(
    private cvService: CvService,
    private router: Router,
    private toastrService: ToastrService
  ) {}
  cvs$: Observable<Cv[]>;
  cv$: Observable<Cv>;
  ngOnInit(): void {
    this.cvs$ = this.cvService.getCvs().pipe(
      catchError((res) => {
        this.toastrService.error('Erreur de récupération de donnés');
        return of(res);
      })
    );
  }
  selectCv(cv: Cv) {
    this.router.navigate(['/list', cv.id]);
  }
}
