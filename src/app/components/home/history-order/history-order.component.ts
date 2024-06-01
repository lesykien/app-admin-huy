import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import {
  _orderModel,
  order,
  orderDTOs,
  orderResponse,
  user,
} from '../../../model/order.model';

@Component({
  selector: 'app-history-order',
  templateUrl: './history-order.component.html',
  styleUrl: './history-order.component.scss',
})
export class HistoryOrderComponent implements OnInit {
  constructor(private _order: OrderService) {}
  isPopup: boolean = true;
  orders: orderResponse[] = [];
  order: order = _orderModel.newModel();
  user: user = _orderModel.newUse();
  ngOnInit(): void {
    this.GetOrder();
  }

  GetOrder() {
    this._order.getData(3).subscribe((response) => {
      this.orders = this.LoadList(response);
      console.log(this.orders);
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
