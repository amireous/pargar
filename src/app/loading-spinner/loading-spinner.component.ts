import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent implements OnInit {
  constructor(private spinnerService: SpinnerService) {}

  loading: boolean | undefined;

  ngOnInit(): void {
    // this.spinnerService.isLoading.subscribe((value) => {
    //   console.log(value);
    //   this.loading = value;
    // });
    //   this.spinnerService.showLoading();
    //   if (this.spinnerService.isLoading) {
    //     this.spinnerService.isLoading.subscribe((value) => {
    //       console.log(value);
    //     });
    //   }
    // }
    // this.spinnerService.showLoading();
    // if (this.spinnerService.isLoading) {
    //   this.spinnerService.isLoading.subscribe((value) => {
    //     this.loading = value;
    //     console.log(value);
    //   });
    // }
    this.spinnerService.isLoading.subscribe((value) => {
      this.loading = value;
    });
  }

  // onClick() {
  //   this.spinnerService.showLoading();
  //   if (this.spinnerService.isLoading) {
  //     this.spinnerService.isLoading.subscribe((value) => {
  //       this.loading = value;
  //     });
  //   }
  // }
}
