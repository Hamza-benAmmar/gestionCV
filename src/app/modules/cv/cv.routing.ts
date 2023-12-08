import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCvComponent } from './components/add-cv/add-cv.component';
import { CvComponent } from './components/cv/cv.component';
import { DetailPersonComponent } from './components/detail-person/detail-person.component';
import { MasterDetailsComponent } from './components/master-details/master-details.component';
import { loginGuard } from './guards/login.guard';
import { unsavedChangesGuard } from './guards/unsaved-changes.guard';
import { cvResolver } from './resolvers/cv-resolver.guard';
import { detailResolver } from './resolvers/detail-resolver..guard';

const APP_ROUTING: Routes = [
  {
    path: '',
    component: CvComponent,
    resolve: {
      cvs: cvResolver,
    },
  },
  {
    path: 'add',
    component: AddCvComponent,
    canDeactivate: [unsavedChangesGuard],
    canActivate: [loginGuard],
  },

  {
    path: 'update/:id',
    component: AddCvComponent,
    canDeactivate: [unsavedChangesGuard],
    canActivate: [loginGuard],
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
    path: ':id',
    component: DetailPersonComponent,
    resolve: { cvDetail: detailResolver },
  },
  // {
  //   path: '',
  //   component: CvComponent,
  //   resolve: { cvs: cvResolver },
  //   canDeactivate: [unsavedChangesGuard],
  // },
];
@NgModule({
  imports: [RouterModule.forChild(APP_ROUTING)],
  exports: [RouterModule],
})
export class CvRoutingModule {}
