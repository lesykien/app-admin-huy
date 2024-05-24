import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  isPopup: boolean = true;

  ngOnInit(): void {}

  RemoveUser(id: number) {
    // truyền vào id người dùng
    let isCheck: boolean = confirm('Bạn có muốn xóa người dùng ngày không');
    
  }
}
