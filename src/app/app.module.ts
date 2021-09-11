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
import { SharedModule } from './modules/shared/shared.module';
import { ParentCategoryComponent } from './modules/category/parent-category/parent-category.component';
import { ChildCategoryComponent } from './modules/category/child-category/child-category.component';
import { ProductsListComponent } from './modules/category/products-list/products-list.component';
import { ProductDetailComponent } from './modules/category/product-detail/product-detail.component';
import { ErrorViewComponent } from './components/error-view/error-view.component';

// import { ErrorComponent } from './modules/shared/error-view/error-view.component';
// import { ProductDetailComponent } from './modules/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    HeaderComponent,
    FooterComponent,
    ParentCategoryComponent,
    ChildCategoryComponent,
    ProductsListComponent,
    ProductDetailComponent,
    ErrorViewComponent,
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
