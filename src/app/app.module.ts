import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  provideClientHydration,
  BrowserModule,
} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ROUTING } from './app.routing';
import { HeaderComponent } from './components/header/header.component';
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { RxJsComponent } from './components/rx-js/rx-js.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ProductComponent } from './product/product.component';
import { CvModule } from './modules/cv/cv.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RxJsComponent,
    ProductComponent,
  ],
  providers: [
    provideClientHydration(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  imports: [
    MiniWordComponent,
    BrowserModule,
    CvModule,
    AuthenticationModule,
    SharedModule,
    AppRoutingModule,
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
