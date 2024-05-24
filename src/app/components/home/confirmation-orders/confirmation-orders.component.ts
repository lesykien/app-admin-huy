import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation-orders',
  templateUrl: './confirmation-orders.component.html',
  styleUrl: './confirmation-orders.component.scss',
})
export class ConfirmationOrdersComponent implements OnInit {
  isPopup: boolean = true;
  ngOnInit(): void {}

  ConfirmationOrder(id : number){
    alert('Xác nhận đơn hàng thành công' + id)
  }

  CancelOrder(id : number){
    alert('Hủy đơn hàng thành công');
  }
}
