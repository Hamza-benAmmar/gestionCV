import { RouterModule, Routes } from '@angular/router';
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { CvComponent } from './cv/cv/cv.component';
import { DetailPersonComponent } from './cv/detail-person/detail-person.component';
import { FormComponent } from './components/form/form.component';
import { FilteringCvComponent } from './components/filtering-cv/filtering-cv.component';
import { RxJsComponent } from './components/rx-js/rx-js.component';
import { ProductComponent } from './product/product.component';

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
  { path: 'filtering', component: FilteringCvComponent },
  { path: 'merge', component: RxJsComponent },
  { path: 'product', component: ProductComponent },
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
