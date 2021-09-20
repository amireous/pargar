import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UserProfileModule } from './modules/user-profile/user-profile.module';
import { SharedModule } from './modules/shared/shared.module';
import { CategoryModule } from './modules/category/category.module';
import { LayoutModule } from './modules/layout/layout.module';
import { HomeScreenModule } from './modules/home-screen/home-screen.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HomeScreenModule,
    UserProfileModule,
    LayoutModule,
    AppRoutingModule,
    CategoryModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
