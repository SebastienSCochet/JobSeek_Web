import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {REST_DOMAIN} from '../constants';
import {Category} from '../model/category';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  /**
   * Retrieve all the categories from the database
   *
   * @return the categories
   */
  findAll(): Observable<Category[]> {
    return this.http.get<Category[]>(`${REST_DOMAIN}/categories`);
  }
}
