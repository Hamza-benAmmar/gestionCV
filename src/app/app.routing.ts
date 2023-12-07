import { Routes, RouterModule } from '@angular/router';
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { RxJsComponent } from './components/rx-js/rx-js.component';
import { FilteringCvComponent } from './modules/cv/components/filtering-cv/filtering-cv.component';
import { ProductComponent } from './product/product.component';

const APP_ROUTING: Routes = [
  {
    path: 'cv',
    loadChildren: async () => {
      const module = await import('./modules/cv/cv.module');
      return module.CvModule;
    },
  },
  {
    path: 'add',
    loadChildren: async () => {
      const module = await import('./modules/cv/cv.module');
      return module.CvModule;
    },
  },
  {
    path: 'list',
    loadChildren: async () => {
      const module = await import('./modules/cv/cv.module');
      return module.CvModule;
    },
  },
  {
    path: '',
    loadChildren: async () => {
      const module = await import('./modules/cv/cv.module');
      return module.CvModule;
    },
  },
  { path: 'miniword', component: MiniWordComponent },
  {
    path: 'login',
    loadChildren: async () => {
      const module = await import(
        './modules/authentication/authentication.module'
      );
      return module.AuthenticationModule;
    },
  },
  { path: 'filtering', component: FilteringCvComponent },
  { path: 'merge', component: RxJsComponent },
  { path: 'product', component: ProductComponent },
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
