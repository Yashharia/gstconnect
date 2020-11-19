import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseurl = "https://backend.gstconnect.in/v1/api/clientMaster/";
  private create = this.baseurl + "create";
  private update = this.baseurl + "update";
  private view = this.baseurl + "getAll";
  private delete = this.baseurl + "delete";
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  createClient(clientData) {
    return this.http.post<any>(this.create, clientData);
  }

  getClients() {
    return this.http.post<any>(this.view, '');
  }

  deleteClient(id) {
    console.log(id);
    return this.http.post(this.delete, id);
  }

  updateClient(clientData) {
    return this.http.post(this.update, clientData);
  }
}
