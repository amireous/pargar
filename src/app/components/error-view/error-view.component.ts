import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-error',
  templateUrl: './error-view.component.html',
  styleUrls: ['./error-view.component.scss'],
})
export class ErrorViewComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    console.log(this.authService.isLogged);
  }
}
