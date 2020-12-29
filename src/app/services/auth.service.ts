import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable, of } from 'rxjs';
import { UserModel } from '../models/user-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(loginInfo): Observable<UserModel> {
   return this.httpClient.post<UserModel>(`${environment.apiUrl}auth`, loginInfo);
  }
  get getAuthToken(): string {
    return '';
  }

  set setAuthToken(name: string) {

  }

  // register(user: UserModel) {

  //   return this.httpClient.post<UserModel>(`${this.baseUrl}user-register`, user);
  // }
}
