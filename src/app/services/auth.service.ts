import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseurl = "https://backend.gstconnect.in/v1/api/";
  private _registerUrl = this.baseurl + "client/registration";
  private _loginUrl = this.baseurl + "login";
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }
  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('user')
  }

  logoutUser() {
    localStorage.removeItem('user')
    this.router.navigate(['/login']);
  }
}
