import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceAccountService {

  constructor(private http: HttpClient,) { }

  getCustomers() {
    return this.http.get("http://localhost:8082/clientes")
  }

  getAccounts(idCustomer: string) {
    console.log("ID Cliente: ", idCustomer);
    return this.http.get("http://localhost:8083/cuentas/cliente/" + idCustomer)
  }

  saveMovement(idAccount: string, movementValue: number) {
    const body = {
      accountId: idAccount,
      valuee: movementValue
    };
    return this.http.post("http://localhost:8083/movimientos", body);
  }



}

