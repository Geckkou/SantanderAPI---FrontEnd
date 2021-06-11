import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Stock from "../shared/models/stock-model";

@Injectable({
  providedIn: 'root'
})
export class DashboradService {

  readonly baseUrl = 'https://santanderapi.herokuapp.com/santander';

  constructor(private http: HttpClient) { }

  async getStocks(): Promise<Stock[]>{
    return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
  }
}
