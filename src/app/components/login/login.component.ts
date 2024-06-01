import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(
    private form: FormBuilder,
    private _user: UserService,
    private router: Router
  ) {}

  LoginForm = this.form.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  ngOnInit(): void {
    this.LoadPage();
  }

  LoadPage() {
    let id: number = Number(localStorage.getItem('id'));
    if(id){
      this.router.navigate(['/home']);
    }
  }

  SumbitForm() {
    let valuesForm: any = this.LoginForm.value;
    let form: FormData = new FormData();
    form.append('psw', valuesForm.password);
    this._user.login(form, valuesForm.username).subscribe((response) => {
      if (response) {
        localStorage.setItem('id', response.id);
        this.router.navigate(['/home']);
        return;
      }
      alert('Đăng nhập thất bại');
    });
  }
}
