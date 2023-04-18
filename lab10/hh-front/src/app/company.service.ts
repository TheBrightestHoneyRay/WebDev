import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company} from "./company";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) { }

  getCompany(): Observable<Company[]>{
    return this.httpClient.get<Company[]>('http://127.0.0.1:8000/api/companies/')
  }

  createCompany(companyName: string): Observable<Company>{
    return this.httpClient.post<Company>(`http://127.0.0.1:8000/api/companies/`, {'name': companyName})
  }
}
