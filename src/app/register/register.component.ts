import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerUserData={}
  constructor(
    private auth:AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    const{username,email,password,phone,pan}=f.form.value;
    this.registerUserData={
      id:email,
      name:username,
      mail:email,
      password:password,
      contact:phone,
      pan:pan,
    };
    this.auth.registerUser(this.registerUserData)
    .subscribe(
      res=>console.log(res),
      err=>console.log(err),
    )
  }

  registerAsProfessional(f:NgForm){
    const{name,email,password,phone,pan}=f.form.value;
    this.registerUserData={
      id:email,

      name:name,
      mail:email,
      password:password,
      contact:phone,
      pan:pan,
    };
    console.log('professional');
    console.log(this.registerUserData);

  }

}
