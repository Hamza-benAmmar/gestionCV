import { CanActivateFn, ResolveFn } from '@angular/router';
import { CvService } from '../../services/cv.service';
import { inject } from '@angular/core';
import { Cv } from '../../models/cv';
import { catchError, of, tap } from 'rxjs';

export const detailResolver: ResolveFn<Cv> = (route, state) => {
  const cvService = inject(CvService);

  return cvService
    .getCvById(route.params['id'])
    .pipe(tap((cv) => console.log('cvvv :', cv)));
};
