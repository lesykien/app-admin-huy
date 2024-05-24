import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-orders',
  templateUrl: './delivery-orders.component.html',
  styleUrl: './delivery-orders.component.scss'
})
export class DeliveryOrdersComponent implements OnInit {
  isPopup : boolean = true
  ngOnInit(): void {
  }

  ConfirmationOrder(id : number){
    alert('Xác nhận đơn hàng thành công' + id)
  }

  CancelOrder(id : number){
    alert('Hủy đơn hàng thành công');
  }

}
