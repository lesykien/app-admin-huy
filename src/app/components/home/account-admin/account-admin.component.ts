import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-admin',
  templateUrl: './account-admin.component.html',
  styleUrl: './account-admin.component.scss',
})
export class AccountAdminComponent implements OnInit {
  constructor(private form: FormBuilder) {}
  Inforamtion = this.form.group({
    fullname: ['', Validators.required],
    username: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],
  });

  ngOnInit(): void {}

  SumbitForm() {
    let valuesForm: any = this.Inforamtion.value;
    console.log(valuesForm);
  }
}
