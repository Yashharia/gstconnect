import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {}
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    const { email, password } = f.form.value;
    this.loginUserData = {
      login_id: email,
      password: password
    }
    this.auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          localStorage.setItem('user', JSON.stringify(res.data));
          console.log(res.data)
          this.router.navigate(['/']);
        },
        err => console.log(err)
      )
  }

}
