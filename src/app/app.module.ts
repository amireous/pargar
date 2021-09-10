import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { ReactiveFormsModule } from '@angular/forms';
// import { UserProfileComponent } from './modules/user-profile/user-profile.component';
// import { LoadingSpinnerComponent } from './modules/shared/shared/loading-spinner/loading-spinner.component';
import { UserProfileModule } from './modules/user-profile/user-profile.module';
import { SharedModule } from './modules/shared/shared/shared.module';
import { ProductComponent } from './modules/product/product.component';
import { EditProfileComponent } from './modules/edit-profile/edit-profile.component';
import { ParentCategoryComponent } from './modules/parent-category/parent-category.component';
import { ChildCategoryComponent } from './modules/child-category/child-category.component';
import { FeatureProductComponent } from './modules/feature-product/feature-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    EditProfileComponent,
    ParentCategoryComponent,
    ChildCategoryComponent,
    FeatureProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UserProfileModule,
    SharedModule,
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
