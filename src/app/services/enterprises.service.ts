import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Enterprise} from '../model/enterprise';
import {REST_DOMAIN} from '../model/constants';

@Injectable({
  providedIn: 'root'
})
export class EnterprisesService {

  constructor(private http: HttpClient) { }

  findById(id: number) {
    return this.http.get<Enterprise>(`${REST_DOMAIN}/enterprises/${id}`);
  }
}
