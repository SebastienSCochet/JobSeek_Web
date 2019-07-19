import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {REST_DOMAIN} from '../model/constants';
import {Category} from '../model/category';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Category[]> {
    return this.http.get<Category[]>(`${REST_DOMAIN}/categories`);
  }
}
