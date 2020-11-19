import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client/client.service';
import { LawService } from 'src/app/services/law/law.service';

@Component({
  selector: 'app-createclient',
  templateUrl: './createclient.component.html',
  styleUrls: ['./createclient.component.css']
})
export class CreateclientComponent implements OnInit {
  loggedInUser = JSON.parse(localStorage.getItem('user'));

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

  })

  constructor(
    private clientService: ClientService,
    private lawService: LawService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.lawService.getLaws().subscribe(
      res => this.laws = res.data,
      err => console.log(err)
    )
  }
  lawFormArray = [];
  onChange(law: string, isChecked: boolean) {
    console.log(this.loggedInUser['user_mail']);


    if (isChecked) {
      this.lawFormArray.push(law);
      console.log(this.lawFormArray);
    } else {
      var index = this.lawFormArray.indexOf(law);
      this.lawFormArray.splice(index, 1);
      console.log(this.lawFormArray);

    }
  }

  onSubmit() {

    console.log(this.form.value);
    for (var val of this.lawFormArray) {
      this.form.value['complianceName'] = val;
      this.form.value['adminUserId'] = this.loggedInUser['user_mail'];

      console.log(this.form);

    }
    this.clientService.createClient(this.form.value)
      .subscribe(
        res => console.log(res),
        err => console.log(err),
      )



  }

}
