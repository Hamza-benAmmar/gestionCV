import { Component, OnInit } from '@angular/core';
import { Cv } from '../../models/cv';
import { CvService } from '../../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

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
    this.activatedRoute.data.subscribe({
      next: (data) => {
        this.cv = data['cvDetail'];
        if (!this.cv) {
          this.toastrService.error('Cannot find CV', 'Error', {
            timeOut: 2000,
          });
          this.router.navigate(['/']);
        }
      },
      error: (error) => {
        this.toastrService.error('Error loading CV details', 'Error');
        this.router.navigate(['/']);
      },
    });
    //console.log('cv : ', this.cv);
    /*this.cvService.getCvById(this.cv.id).subscribe({
      next: (cv) => {
        this.cv = cv;
      },
    });*/
    /*this.activatedRoute.params.subscribe((params) => {
      const { id } = params;
      /*this.cvService.getCvById(id).subscribe({
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
      this.cv.
    });*/
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
