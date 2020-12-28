import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable, of } from 'rxjs';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = 'https://localhost:44381/api/'
  constructor(private httpClient: HttpClient) { }

  login(loginInfo): Observable<UserModel> {
    console.log()
    //return of({name:{firstName:'Umesh',lastName:'rajput'},id:'23232', addresses:[],phones:[],emailIds:[],identifications:[]})
    return this.httpClient.post<UserModel>(`${this.baseUrl}auth`, loginInfo);
  }
  get getAuthToken(): string {
    return '';
  }

  set setAuthToken(name: string) {

  }

  register(user: UserModel) {
   
    return this.httpClient.post<UserModel>(`${this.baseUrl}user-register`, user);
  }
}
