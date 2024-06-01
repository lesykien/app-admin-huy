import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.LoadPage();
  }

  LoadPage() {
    let id: number = Number(localStorage.getItem('id'));
    if (!id) {
      this.router.navigate(['/']);
    }
  }

  LogOut() {
    localStorage.removeItem('id');
    this.LoadPage();
  }
}
