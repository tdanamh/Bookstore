import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm;
  auth;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  ngOnInit() { }

  onSubmit(accountData) {
    let user = {
      email: accountData.email,
      password: accountData.password
    };

    this.http.post<string>('http://localhost:49820/' + 'api/login/', user)
      .subscribe(result => {
        if (result['message'] == "Unauthorized!") {
          this.auth = false;
        } else {
          localStorage.setItem('userConnected', result["userId"]);
          window.location.replace('/');

          this.loginForm.reset();

          alert('Login successful');
        }    
      });

  }

}

