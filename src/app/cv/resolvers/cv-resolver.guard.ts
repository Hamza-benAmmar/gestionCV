import { CanActivateFn, ResolveFn } from '@angular/router';
import { CvService } from '../../services/cv.service';
import { inject } from '@angular/core';
import { Cv } from '../../models/cv';
import { catchError, of, tap } from 'rxjs';

export const cvResolver: ResolveFn<Cv[]> = (route, state) => {
  console.log('hey');
  const cvService = inject(CvService);
  return cvService.getCvs().pipe(tap((data) => console.log(data)));
};
