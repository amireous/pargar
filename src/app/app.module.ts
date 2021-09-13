import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeScreenComponent } from './modules/home-screen/home-screen.component';
// import { HeaderComponent } from './modules/layout/header/header.component';
// import { FooterComponent } from './modules/layout/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { ReactiveFormsModule } from '@angular/forms';
// import { UserProfileComponent } from './modules/user-profile/user-profile.component';
// import { LoadingSpinnerComponent } from './modules/shared/shared/loading-spinner/loading-spinner.component';
import { UserProfileModule } from './modules/user-profile/user-profile.module';
import { SharedModule } from './modules/shared/shared.module';
// import { ParentCategoryComponent } from './modules/category/parent-category/parent-category.component';
// import { ChildCategoryComponent } from './modules/category/child-category/child-category.component';
// import { ProductsListComponent } from './modules/category/products-list/products-list.component';
// import { ProductDetailComponent } from './modules/category/product-detail/product-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CategoryModule } from './modules/category/category.module';
import { LayoutModule } from './modules/layout/layout.module';
import { HomeScreenModule } from './modules/home-screen/home-screen.module';
// import { CategoryComponent } from './modules/category/category/category.component';
// import { NormalComponent } from './normal/normal.component';

// import { ErrorComponent } from './modules/shared/error-view/error-view.component';
// import { ProductDetailComponent } from './modules/product-detail/product-detail.component';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    HomeScreenModule,
    AppRoutingModule,
    LayoutModule,
    CategoryModule,
    UserProfileModule,
    BrowserModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
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
