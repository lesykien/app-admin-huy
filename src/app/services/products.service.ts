import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { _shared } from '../Shared/shared';
import { products, productsDetal, productsForm } from '../model/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getData(): Observable<products[]> {
    return this.http.get<products[]>(`${_shared.api}*api/Product`);
  }
  create(form: FormData): Observable<string> {
    return this.http.post<string>(`${_shared.api}*api/Product`, form);
  }

  getById(id: number): Observable<productsDetal[]> {
    return this.http.get<productsDetal[]>(`${_shared.api}*api/Product/${id}`);
  }

  update(id: number, form: FormData): Observable<string> {
    return this.http.put<string>(
      `${_shared.api}*api/Product/product/${id}`,
      form
    );
  }
}
