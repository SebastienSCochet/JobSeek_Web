import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Enterprise} from '../model/enterprise';
import {REST_DOMAIN} from '../model/constants';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EnterprisesService {

  constructor(private http: HttpClient) { }

  findAll(name: string): Observable<Enterprise[]> {
    return this.http.get<Enterprise[]>(`${REST_DOMAIN}/enterprises?name=${name}`);
  }

  findById(id: number): Observable<Enterprise> {
    return this.http.get<Enterprise>(`${REST_DOMAIN}/enterprises/${id}`);
  }
}
