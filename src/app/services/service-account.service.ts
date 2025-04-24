import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceAccountService {

  constructor(private http: HttpClient,) { }

  getCustomers() {
    return this.http.get("http://localhost:8082/clientes")
  }

  saveCustomer(customer: Customer) {

    return this.http.post("http://localhost:8082/clientes", customer);
  }

  updateCustomer(customer: Customer) {

    return this.http.put("http://localhost:8082/clientes/"+customer.id, customer);
  }

  deleteCustomer(idCustomer: number) {

    return this.http.delete("http://localhost:8082/clientes/" + idCustomer);
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

  getMovements(idCustomer: string, startDate: string, endDate: string) {
    console.log("ID Cliente: ", idCustomer);
    const params = {
      accountId: idCustomer,
      startDate: startDate,
      endDate: endDate
    };
    return this.http.get("http://localhost:8083/movimientos", { params });

    
  }

}

