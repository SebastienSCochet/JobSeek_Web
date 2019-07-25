import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobOffer } from '../model/job-offer';
import { REST_DOMAIN } from '../model/constants';

@Injectable({
  providedIn: 'root'
})
export class JobOffersService {

  constructor(private http: HttpClient) { }

  findPreferredOffers(keyword: string): Observable<JobOffer[]> {
    return this.http.get<JobOffer[]>(`${REST_DOMAIN}/job-offers?keyword=${keyword}`);
  }
}
