import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuelService {
  private url = 'http://localhost:8080/billing/fuel';

  constructor(private http: HttpClient) { }

  createFuelbill(fuel: Object): Observable<Object> {
    return this.http.post(`${this.url}`, fuel);
  }

  updateFuelbill(id: number, fuel: Object): Observable<Object> {
    return this.http.put(`${this.url}/${id}`, fuel);
  }

  deleteFuelbill(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  getFuelbillsList(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
}
