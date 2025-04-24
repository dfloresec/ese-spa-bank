import { Component, OnInit } from '@angular/core';
import { ServiceAccountService } from '../services/service-account.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-account',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent implements OnInit {
  dataCustomers: any = []
  dataAccounts:any = []

  constructor(private accountService: ServiceAccountService,) { }
  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes() {
    this.accountService.getCustomers().subscribe((data) => {
      console.log("Clientes: ", data);
      this.dataCustomers = data;
    })
  }

  obtenerCuentas(idCustomer: string) {
    this.accountService.getAccounts(idCustomer).subscribe((data) => {
      console.log(">>>>>>>>>>>>>>>Cuentas: ", data);
      this.dataAccounts = data;
    })
  }
}
