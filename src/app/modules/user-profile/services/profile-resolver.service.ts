import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { RootObjectChild } from 'src/app/models/api-data.model';
import { RootObjectProfile } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileResolverService
  implements Resolve<Promise<RootObjectProfile>>
{
  constructor(private apiService: ApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<RootObjectProfile> {
    return new Promise((resolve, reject) => {
      this.apiService.getUserProfile().subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
