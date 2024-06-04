import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { _shared } from '../Shared/shared';
import { SingleResponse } from '../model/singleReponse';
import { Observable } from 'rxjs';
import { blogDTOs } from '../model/blogs.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  create(form: FormData) {
    return this.http.post<SingleResponse>(
      `${_shared.api}api/Blog/add-new-blog`,
      form
    );
  }

  getData(): Observable<blogDTOs[]> {
    return this.http.get<blogDTOs[]>(`${_shared.api}api/Blog/get-all`);
  }

  update(form: FormData, id: number) {
    return this.http.put<SingleResponse>(
      `${_shared.api}api/Blog/update-blog/${id}`,
      form
    );
  }
}
