import { Component, OnInit } from '@angular/core';
import { Cv } from '../../models/cv';
import { UserService } from '../../services/user.service';
import { CvService } from '../../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filtering-cv',
  templateUrl: './filtering-cv.component.html',
  styleUrl: './filtering-cv.component.css',
})
export class FilteringCvComponent implements OnInit {
  date: Date = new Date();
  cvs: Cv[];
  juniors: Cv[];
  seniors: Cv[];
  constructor(private cvService: CvService, private router: Router) {}
  ngOnInit(): void {
    this.cvService.getCvs().subscribe({
      next: (cvs) => {
        console.log('filter : ', cvs);
        if (cvs != null) {
          this.juniors = cvs.filter((cv) => cv.age < 40);
          this.seniors = cvs.filter((cv) => cv.age >= 40);
          console.log(this.juniors);
          this.cvs = this.juniors;
        }
      },
    });
  }

  showJuniors() {
    this.cvs = this.juniors;
  }

  showSeniors() {
    this.cvs = this.seniors;
  }
  onSelectCv(cv: Cv) {
    const params = cv.id;
    this.router.navigate(['cv', params]);
  }
}
