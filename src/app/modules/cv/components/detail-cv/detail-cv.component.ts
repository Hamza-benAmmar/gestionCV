import { Component, Input } from '@angular/core';
import { Cv } from '../../models/cv';
import { EmbaucheService } from '../../services/embauche.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrl: './detail-cv.component.css',
})
export class DetailCvComponent {
  constructor(
    private embaucheService: EmbaucheService,
    private router: Router
  ) {}
  @Input() cv: Cv | null = null;
  embaucherCondidate(): void {
    if (this.cv) {
      this.embaucheService.embaucherCondidate(this.cv);
    }
  }
  more() {
    const link = ['cv', this.cv?.id];
    this.router.navigate(link);
  }
}
