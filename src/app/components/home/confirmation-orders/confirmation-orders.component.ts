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
import { log } from 'console';
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
    this._order.getById(id).subscribe((response) => {
      this.Update(id, response.statusDelivery);
    });
  }

  Update(id: number, status: number) {
    this._order.update(id, status).subscribe((response) => {});
    alert('Duyệt đơn thành công');
    window.location.reload();
  }

  CancelOrder(id: number) {
    let isCheck = confirm('Bạn có muốn hủy đơn hàng này không');
    if (isCheck) {
      this._order.update(id, 3).subscribe((response) => {
        if (response.code == 200) {
          alert('Hủy đơn hàng thành công');
          window.location.reload();
          return;
        }
        alert('Hủy đơn thất bại');
      });
    }
  }

  GetById(id: number) {
    this._order.getById(id).subscribe((response) => {
      this.order = response;
      this.GetUserById(this.order.accountId);
    });
  }

  GetUserById(id: number) {
    this._order.getUser(id).subscribe((response) => {
      this.user = response;
    });
  }
}
