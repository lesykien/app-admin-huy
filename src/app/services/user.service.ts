import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { _shared } from '../Shared/shared';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(form: FormData, userName: string): Observable<any> {
    return this.http.post<any>(
      `${_shared.api}Login?userName=${userName}`,
      form
    );
  }
}
