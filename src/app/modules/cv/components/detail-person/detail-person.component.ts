import { Component, OnInit } from '@angular/core';
import { Cv } from '../../models/cv';
import { CvService } from '../../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { UserService } from '../../../authentication/services/user.service';

@Component({
  selector: 'app-detail-person',
  templateUrl: './detail-person.component.html',
  styleUrl: './detail-person.component.css',
})
export class DetailPersonComponent implements OnInit {
  cv: Cv | undefined;
  isLoggedIn$: Observable<boolean> = this.userService.isLoggedIn;
  constructor(
    private cvService: CvService,
    private userService: UserService,
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
  }
  deleteCv() {
    const id = this.activatedRoute.snapshot.params['id'];
    if (this.cv) {
      this.cvService.deleteCv(id).subscribe({
        next: () => {
          this.router.navigate(['cv']);
          this.toastrService.success('Cv deleted successfully', 'error', {
            timeOut: 2000,
          });
        },
        error: (err) => {
          this.toastrService.error(`error deleting Cv`, 'error', {
            timeOut: 2000,
          });
          return of(null);
        },
      });
    }
  }
}
