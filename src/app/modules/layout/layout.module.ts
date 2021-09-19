import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NotFoundComponent } from './not-found/not-found.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    NotFoundComponent,
    DialogBoxComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    LayoutRoutingModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [HeaderComponent, FooterComponent, LoadingSpinnerComponent],
})
export class LayoutModule {}
