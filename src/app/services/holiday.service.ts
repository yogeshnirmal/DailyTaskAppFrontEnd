import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hoilday } from '../hoilday';



@Injectable({
  providedIn: 'root'
})
export class HolidayService {

  constructor(private httpClient: HttpClient) { }

  private baseURL = "http://localhost:8080/holiday";

  getHolidayList(): Observable<Hoilday[]> {
    return this.httpClient.get<Hoilday[]>(`${this.baseURL}/`);
  }

  createHoilday(holiday: Hoilday): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/`, holiday);
  }

  getHoildayById(id: number): Observable<Hoilday> {
    return this.httpClient.get<Hoilday>(`${this.baseURL}/${id}`);
  }

  updateHoilday(id: number, holiday: Hoilday): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, holiday);
  }

  deleteHoilday(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
