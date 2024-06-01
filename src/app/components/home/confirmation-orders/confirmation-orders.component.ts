import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import {
  _orderModel,
  order,
  orderDTOs,
  orderResponse,
  user,
} from '../../../model/order.model';
import { response } from 'express';
@Component({
  selector: 'app-confirmation-orders',
  templateUrl: './confirmation-orders.component.html',
  styleUrl: './confirmation-orders.component.scss',
})
export class ConfirmationOrdersComponent implements OnInit {
  constructor(private _order: OrderService) {}
  isPopup: boolean = true;
  orders: orderResponse[] = [];
  order: order = _orderModel.newModel();
  user: user = _orderModel.newUse();
  ngOnInit(): void {
    this.GetOrder();
  }
  GetOrder() {
    this._order.getData(1).subscribe((response) => {
      console.log(this.LoadList(response));
      this.orders = this.LoadList(response);
    });
  }
  LoadList(listItem: orderDTOs[]): orderResponse[] {
    let list: orderResponse[] = [];
    listItem.forEach((item) => {
      this._order.getUser(item.accountId).subscribe((response) => {
        if (response) {
          let newItem: orderResponse = {
            id: item.id,
            fullName: response.fullName,
            phone: response.phoneNumber,
            amount: item.total,
            date: item.time,
            statusDelivery: item.statusDelivery,
          };
          list.push(newItem);
        }
      });
    });
    return list;
  }

  ConfirmationOrder(id: number) {
    alert('Xác nhận đơn hàng thành công' + id);
  }

  CancelOrder(id: number) {
    alert('Hủy đơn hàng thành công');
  }

  GetById(id: number) {
    this._order.getById(id).subscribe((response) => {
      this.order = response[0];
      console.log(this.order);
      this.GetUserById(this.order.accountId);
    });
  }

  GetUserById(id: number) {
    this._order.getUser(id).subscribe((response) => {
      this.user = response;
    });
  }
}
