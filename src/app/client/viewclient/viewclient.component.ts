import { Component, OnInit } from '@angular/core';
import { LawService } from 'src/app/services/law/law.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-viewclient',
  templateUrl: './viewclient.component.html',
  styleUrls: ['./viewclient.component.css']
})
export class ViewclientComponent implements OnInit {

  laws = []
  form = new FormGroup({
    entityType: new FormControl(''),
    customFields: new FormControl(''),
    companyName: new FormControl(''),
    registeredAddress: new FormControl(''),
    state: new FormControl(''),
    registrations: new FormControl(''),
    registrations_number: new FormControl(''),
    stateOfRegistrations: new FormControl(''),
    approxTurnover: new FormControl(''),
    surrenderOfRegistration: new FormControl(''),
    dateOfRegistration: new FormControl(''),
    complianceName: new FormControl(''),
    adminUserId: new FormControl(''),
    filedDate: new FormControl(''),
    isModeratorApproved: new FormControl(''),
    uploadUrl: new FormControl(''),
    dueDate: new FormControl(''),
  })
  constructor(
    private lawService: LawService

  ) { }


  ngOnInit(): void {
    this.lawService.getLaws().subscribe(
      res => this.laws = res.data,
      err => console.log(err)
    )
  }

}
