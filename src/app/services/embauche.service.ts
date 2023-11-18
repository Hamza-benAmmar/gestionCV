import { Injectable } from '@angular/core';
import { Cv } from '../models/cv';
import { ToastrService } from 'ngx-toastr';
import { CvService } from './cv.service';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  private cvsEmbauches: Cv[] = [];

  constructor(
    private toastrService: ToastrService,
    private cvService: CvService
  ) {}
  getEmbaches(): Cv[] {
    return this.cvsEmbauches;
  }
  embaucherCondidate(cv: Cv): void {
    const index = this.cvsEmbauches.findIndex((c) => c.id === cv.id);
    if (index === -1) {
      this.cvsEmbauches.push(cv);
      this.toastrService.success(
        `${cv.firstname} ${cv.name}  est selectionné(e)`,
        'Congratulations',
        {
          positionClass: 'toast-top-right',
          timeOut: 2000,
        }
      );
    } else {
      this.toastrService.error(
        `${cv.firstname} ${cv.name}  est déjà sélectionné(e)`,
        'Error',
        {
          positionClass: 'toast-top-right',
          timeOut: 2000,
        }
      );
    }
  }
}
