import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobOffer } from '../model/job-offer';
import { REST_DOMAIN } from '../model/constants';
import {Search} from '../model/search';

@Injectable({
  providedIn: 'root'
})
export class JobOffersService {

  constructor(private http: HttpClient) { }

  findOffersBySearch(search: Search): Observable<JobOffer[]> {
    return this.http.post<JobOffer[]>(`${REST_DOMAIN}/job-offers/search`, search);
  }
}
