import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Coordinate} from '../model/coordinate';
import {Observable} from 'rxjs';
import {REST_DOMAIN} from '../model/constants';

@Injectable({
  providedIn: 'root'
})
export class CoordinatesService {

  constructor(private http: HttpClient) {}

  saveCoordinate(coordinate: Coordinate): Observable<Coordinate> {
    return this.http.post<Coordinate>(`${REST_DOMAIN}/coordinates`, coordinate);
  }

  updateCoordinate(coordinate: Coordinate) {
    return this.http.put<Coordinate>(`${REST_DOMAIN}/coordinates`, coordinate);
  }
}
