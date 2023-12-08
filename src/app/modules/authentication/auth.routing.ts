import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';

const APP_ROUTING: Routes = [
  {
    path: '',
    component: FormComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(APP_ROUTING)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
