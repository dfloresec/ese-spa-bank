import { Component, OnInit } from '@angular/core';
import { ServiceAccountService } from '../services/service-account.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-movements',
  imports: [CommonModule, FormsModule ],
  templateUrl: './manage-movements.component.html',
  styleUrl: './manage-movements.component.css'
})
export class ManageMovementsComponent implements OnInit {
  dataCustomers: any = []
  dataAccounts: any = []
  movementValue: number = 0;
  selectedAccountId : string = '';

  constructor(private accountService: ServiceAccountService,) { }

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
    ngOnInit(): void {
      this.obtenerClientes();
    }

    onSubmit() {
  if (this.selectedAccountId) {
    this.accountService.saveMovement(this.selectedAccountId, this.movementValue).subscribe((data) => {
      console.log("Movimiento guardado: ", data);
      const message = data && typeof data === 'object' && 'message' in data ? data.message : "Movimiento guardado correctamente.";
      alert(message);
    });
  } else {
    alert("Por favor, seleccione una cuenta.");
  }
  }
  
    
}
