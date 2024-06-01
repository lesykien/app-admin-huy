import { Component, OnInit } from '@angular/core';
import {
  orderResponse,
  order,
  _orderModel,
  user,
  orderDTOs,
} from '../../../model/order.model';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-delivery-orders',
  templateUrl: './delivery-orders.component.html',
  styleUrl: './delivery-orders.component.scss',
})
export class DeliveryOrdersComponent implements OnInit {
  constructor(private _order: OrderService) {}
  isPopup: boolean = true;
  orders: orderResponse[] = [];
  order: order = _orderModel.newModel();
  user: user = _orderModel.newUse();
  ngOnInit(): void {
    this.GetOrder();
  }
  GetOrder() {
    this._order.getData(2).subscribe((response) => {
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
    alert('Giao đơn thành công');
    window.location.reload();
  }

  CancelOrder(id: number) {
    let isCheck = confirm('Bạn có muốn hủy đơn hàng này không');
    if (isCheck) {
      this._order.update(id, 3).subscribe((response) => {});
      alert('Hủy đơn hàng thành công');
      window.location.reload();
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
