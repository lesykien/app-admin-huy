import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { order, orderDTOs } from '../model/order.model';
import { _shared } from '../Shared/shared';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  getData(status: number): Observable<orderDTOs[]> {
    return this.http.get<orderDTOs[]>(
      `${_shared.api}api/OrdersControllers/get-orders-by-type/type/${status}`
    );
  }

  getUser(id: number): Observable<any> {
    return this.http.get<any>(`${_shared.api}api/Account/${id}`);
  }

  getById(id: number): Observable<order[]> {
    return this.http.get<order[]>(
      `${_shared.api}api/OrdersControllers/get-order-by-id/${id}`
    );
  }
}
