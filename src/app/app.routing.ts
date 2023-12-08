import { Routes, RouterModule } from '@angular/router';
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { RxJsComponent } from './components/rx-js/rx-js.component';
import { FilteringCvComponent } from './modules/cv/components/filtering-cv/filtering-cv.component';
import { ProductComponent } from './product/product.component';

const APP_ROUTING: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'filtering', component: FilteringCvComponent },
  { path: 'merge', component: RxJsComponent },
  {
    path: 'cv',
    loadChildren: () =>
      import('./modules/cv/cv.module').then((m) => m.CvModule),
    data: { preload: true },
  },
  { path: 'miniword', component: MiniWordComponent },
  {
    path: 'login',
    loadChildren: () => {
      return import('./modules/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      );
    },
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/cv/cv.module').then((m) => m.CvModule),
    data: { preload: true },
  },
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
