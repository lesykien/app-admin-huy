import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(private form: FormBuilder) {}

  LoginForm = this.form.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  ngOnInit(): void {}

  SumbitForm() {
    // thông tin đăng nhập gửi về serve
    let valuesForm: any = this.LoginForm.value;
    console.log(valuesForm);
  }
}
