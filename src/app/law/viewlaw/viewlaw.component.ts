import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { LawService } from 'src/app/services/law/law.service';
import { FormControl, FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-viewlaw',
  templateUrl: './viewlaw.component.html',
  styleUrls: ['./viewlaw.component.css']
})
export class ViewlawComponent implements OnInit {
  faTrash = faTrash;
  faEdit = faEdit;
  laws = []

  updateDetails = {}

  // Modal values

  lawModal: string;
  complianceNameModal: string;
  frequencyModal: string;
  turnoverModal: string;
  idModal: number;

  constructor(
    private lawService: LawService
  ) { }

  ngOnInit(): void {
    this.lawService.getLaws().subscribe(
      res => this.laws = res.data,
      err => console.log(err)
    )
  }



  updateLaw(id: number) {
    var result = this.laws.find(law => {
      return law.id === id
    });
    this.lawModal = result.law;
    this.complianceNameModal = result.compliance_name;
    this.frequencyModal = result.frequency;
    this.turnoverModal = result.turnover;
    this.idModal = result.id;
  }



  deleteLaw(id: any) {
    this.lawService.deleteLaw(
      {
        "id": id
      }
    ).subscribe(
      res => window.location.reload(),
      err => console.log(err)
    )
  }


  onSubmit(f: NgForm) {
    const { email, password } = f.form.value;
    this.updateDetails = {
      login_id: email,
      password: password,
    }
    console.log(this.updateDetails);
    this.lawService.updateLaw(this.updateDetails)
      .subscribe(
        res => console.log(res),
        err => console.log(err),
      )

  }


}
