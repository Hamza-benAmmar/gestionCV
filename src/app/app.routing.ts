import { RouterModule, Routes } from '@angular/router';
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { CvComponent } from './cv/cv/cv.component';
import { DetailPersonComponent } from './cv/detail-person/detail-person.component';
import { FormComponent } from './components/form/form.component';
import { FilteringCvComponent } from './components/filtering-cv/filtering-cv.component';
import { RxJsComponent } from './components/rx-js/rx-js.component';
import { ProductComponent } from './product/product.component';
import { cvResolver } from './cv/resolvers/cv-resolver.guard';
import { detailResolver } from './cv/resolvers/detail-resolver..guard';
import { MasterDetailsComponent } from './cv/master-details/master-details.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { unsavedChangesGuard } from './guards/unsaved-changes.guard';

const APP_ROUTING: Routes = [
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent, resolve: { cvs: cvResolver } },
      {
        path: ':id',
        component: DetailPersonComponent,
        resolve: { cvDetail: detailResolver },
      },
      {
        path: 'update/:id',
        component: AddCvComponent,
        canDeactivate: [unsavedChangesGuard],
      },
    ],
  },
  {
    path: 'add',
    component: AddCvComponent,
    canDeactivate: [unsavedChangesGuard],
  },
  {
    path: 'list',
    component: MasterDetailsComponent,
    resolve: { cvs: cvResolver },
    children: [
      {
        path: ':id',
        component: DetailPersonComponent,
        resolve: { cvDetail: detailResolver },
      },
    ],
  },
  {
    path: '',
    component: CvComponent,
    resolve: { cvs: cvResolver },
    canDeactivate: [unsavedChangesGuard],
  },
  { path: 'miniword', component: MiniWordComponent },
  { path: 'login', component: FormComponent },
  { path: 'filtering', component: FilteringCvComponent },
  { path: 'merge', component: RxJsComponent },
  { path: 'product', component: ProductComponent },
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
