import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobOffer } from '../model/job-offer';
import { REST_DOMAIN } from '../constants';
import {Search} from '../model/search';
import {Enterprise} from '../model/enterprise';

@Injectable({
  providedIn: 'root'
})
export class JobOffersService {

  constructor(private http: HttpClient) { }

  /**
   * Find offer by search
   * @param search made by the user
   */
  findOffersBySearch(search: Search): Observable<JobOffer[]> {
    return this.http.post<JobOffer[]>(`${REST_DOMAIN}/job-offers/search`, search);
  }

  /**
   * Find offer by its id
   * @param id of the offer
   */
  findOfferById(id: number): Observable<JobOffer> {
    return this.http.get<JobOffer>(`${REST_DOMAIN}/job-offers/${id}`);
  }

  /**
   * Delete offer by its id
   * @param id of the job offer
   */
  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${REST_DOMAIN}/job-offers/${id}`);
  }

  /**
   * Create offer
   * @param jobOffer to add
   */
  create(jobOffer: JobOffer): Observable<Enterprise> {
    return this.http.post<Enterprise>(`${REST_DOMAIN}/job-offers`, jobOffer);
  }
}
