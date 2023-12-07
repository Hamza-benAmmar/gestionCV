import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddCvComponent } from './components/add-cv/add-cv.component';
import { CvComponent } from './components/cv/cv.component';
import { DetailCvComponent } from './components/detail-cv/detail-cv.component';
import { DetailPersonComponent } from './components/detail-person/detail-person.component';
import { EmbaucheComponent } from './components/embauche/embauche.component';
import { FilteringCvComponent } from './components/filtering-cv/filtering-cv.component';
import { ItemCvComponent } from './components/item-cv/item-cv.component';
import { ListCvComponent } from './components/list-cv/list-cv.component';
import { MasterDetailsComponent } from './components/master-details/master-details.component';
import { SearchComponent } from './components/search/search.component';
import { CvRoutingModule } from './cv.routing';
import { DefaultImagePipe } from './pipes/default-image.pipe';

@NgModule({
  declarations: [
    MasterDetailsComponent,
    AddCvComponent,
    DetailPersonComponent,
    FilteringCvComponent,
    ItemCvComponent,
    SearchComponent,
    DefaultImagePipe,
    CvComponent,
    DetailCvComponent,
    EmbaucheComponent,
    ListCvComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CvRoutingModule,
    HttpClientModule,
  ],
})
export class CvModule {}
