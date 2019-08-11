import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Enterprise} from '../model/enterprise';
import {REST_DOMAIN} from '../constants';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnterprisesService {

  constructor(private http: HttpClient) { }

  /**
   * Retrieve all enterprises from the database
   *
   * @param name name of the enterprise to filter (not required)
   * @return the enterprises
   */
  findAll(name: string): Observable<Enterprise[]> {
    return this.http.get<Enterprise[]>(`${REST_DOMAIN}/enterprises?name=${name}`);
  }

  /**
   * Retrieve the enterprise by its id or throw NotFoundException
   *
   * @param id of the enterprise
   * @return corresponding enterprise
   */
  findById(id: number): Observable<Enterprise> {
    return this.http.get<Enterprise>(`${REST_DOMAIN}/enterprises/${id}`);
  }

  /**
   * Create an enterprise
   *
   * @param enterprise enterprise to add
   * @return the created enterprise
   */
  save(enterprise: Enterprise): Observable<Enterprise> {
    return this.http.post<Enterprise>(`${REST_DOMAIN}/enterprises`, enterprise);
  }
}
