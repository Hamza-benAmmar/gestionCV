import { RouterModule, Routes } from '@angular/router';
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { CvComponent } from './cv/cv/cv.component';
import { DetailCvComponent } from './cv/detail-cv/detail-cv.component';
import { DetailPersonComponent } from './cv/detail-person/detail-person.component';
import { FormComponent } from './components/form/form.component';

const APP_ROUTING: Routes = [
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      { path: ':id', component: DetailPersonComponent },
    ],
  },
  { path: '', component: CvComponent },
  { path: 'miniword', component: MiniWordComponent },
  { path: 'login', component: FormComponent },
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
