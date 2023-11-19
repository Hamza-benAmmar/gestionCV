import { Component, OnInit } from '@angular/core';
import { Cv } from '../../models/cv';
import { CvService } from '../../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-person',
  templateUrl: './detail-person.component.html',
  styleUrl: './detail-person.component.css',
})
export class DetailPersonComponent implements OnInit {
  cv: Cv | undefined;

  constructor(
    private cvService: CvService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router
  ) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const { id } = params;
      this.cvService.getCvById(id).subscribe({
        next: (cv) => {
          console.log(cv);
          this.cv = cv;
        },
        error: (error) => {
          this.router.navigate(['']);
          this.toastrService.error('Cannot find Cv ', 'error', {
            timeOut: 2000,
          });
        },
      });
    });
  }
  deleteCv() {
    if (this.cv) {
      this.cvService.deleteCv(this.cv.id).subscribe(
        () => {
          console.log('deleting');
          this.router.navigate(['']);
        },
        (error) => {
          console.error('Error deleting CV:', error);
        }
      );
    }
  }
}
