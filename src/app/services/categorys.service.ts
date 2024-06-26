import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { _shared } from '../Shared/shared';

@Injectable({
  providedIn: 'root',
})
export class CategorysService {
  constructor(private http: HttpClient) {}

  getAllData(): Observable<any> {
    return this.http.get<any>(`${_shared.api}api/Category`);
  }

  create(form: FormData) {
    return this.http.post<any>(`${_shared.api}api/Category`, form);
  }
  update(id: number, form: FormData) {
    return this.http.put<any>(
      `${_shared.api}api/Category/Update/${id}`,
      form
    );
  }
}
