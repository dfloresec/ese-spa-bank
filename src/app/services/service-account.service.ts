import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceAccountService {

  constructor(private http: HttpClient,) { }

  getAccount(identification:string){

    return this.http.get("http://localhost:8083/cuentas")

  }
}

