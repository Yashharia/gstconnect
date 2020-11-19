import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LawService } from 'src/app/services/law/law.service';

@Component({
  selector: 'app-createlaw',
  templateUrl: './createlaw.component.html',
  styleUrls: ['./createlaw.component.css']
})
export class CreatelawComponent implements OnInit {
  form = new FormGroup({
    law: new FormControl('', Validators.required),
    complianceName: new FormControl('', Validators.required),
    frequency: new FormControl('', Validators.required),
    turnover: new FormControl('', Validators.required),
  })




  constructor(
    private lawService: LawService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  onSubmit() {

    console.log(this.form.value);
    this.lawService.createLaw(this.form.value)
      .subscribe(
        res => { this.router.navigate(['/view-laws']) },
        err => console.log(err),
      )

  }

}
