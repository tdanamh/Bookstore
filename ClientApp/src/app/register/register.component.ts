import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  registerForm;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    });
  }

  ngOnInit() { }

  onSubmit(accountData) {
    let user = {
      email: accountData.email,
      password: accountData.password,
      firstName: accountData.firstName,
      lastName: accountData.lastName,
    };

    // register the new account
    this.http.post<Account>('http://localhost:49820/' + 'api/users/', user)
      .subscribe(result => {
        window.location.replace('/login');
      });

    this.registerForm.reset();
    alert('Your account has been created');
  }

}

