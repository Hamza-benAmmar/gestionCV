import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RainbowDirective } from './directives/rainbow.directive';
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { CvComponent } from './cv/cv/cv.component';
import { DetailCvComponent } from './cv/detail-cv/detail-cv.component';
import { ListCvComponent } from './cv/list-cv/list-cv.component';
import { ItemCvComponent } from './cv/item-cv/item-cv.component';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ROUTING } from './app.routing';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailPersonComponent } from './cv/detail-person/detail-person.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { FilteringCvComponent } from './components/filtering-cv/filtering-cv.component';
import { SearchComponent } from './components/search/search.component';
import { RxJsComponent } from './components/rx-js/rx-js.component';
import { ProductComponent } from './product/product.component';
import { MasterDetailsComponent } from './cv/master-details/master-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    DetailCvComponent,
    ListCvComponent,
    ItemCvComponent,
    EmbaucheComponent,
    HeaderComponent,
    DetailPersonComponent,
    FormComponent,
    DefaultImagePipe,
    FilteringCvComponent,
    SearchComponent,
    RxJsComponent,
    ProductComponent,
    MasterDetailsComponent,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MiniWordComponent,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-left',
    }),
    ROUTING,
  ],
})
export class AppModule {}
