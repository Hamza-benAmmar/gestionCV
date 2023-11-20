import { Component, OnInit } from '@angular/core';
import { Cv } from '../../models/cv';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../../services/cv.service';

@Component({
  selector: 'app-master-details',
  templateUrl: './master-details.component.html',
  styleUrl: './master-details.component.css',
})
export class MasterDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) {}
  cvs: Cv[];
  ngOnInit(): void {
    this.cvService.getCvs().subscribe({
      next: (cvs) => (this.cvs = cvs),
    });
  }
  selectCv(cv: Cv) {
    this.router.navigate(['/list', cv.id]);
  }
}
