import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LawService {
  private baseurl = "https://backend.gstconnect.in/v1/api/lawMaster/";
  private create = this.baseurl + "create";
  private update = this.baseurl + "update";
  private view = this.baseurl + "getAll";
  private delete = this.baseurl + "delete";


  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  createLaw(lawData) {
    return this.http.post<any>(this.create, lawData);
  }

  getLaws() {
    return this.http.post<any>(this.view, '');
  }

  deleteLaw(id) {
    console.log(id);
    return this.http.post(this.delete, id);
  }

  updateLaw(lawData) {
    return this.http.post(this.update, lawData);
  }
}
