import { Component } from '@angular/core';
import { ServiceAccountService  } from '../services/service-account.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-customer-management',
  imports: [CommonModule, FormsModule ],
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.css']
})
export class CustomerManagementComponent {
  dataCustomers: any = [];
  showForm = false;
  errors: any[] = [];


  customer: Customer = {
    name: '',
    gender: 'M',
    age: 0,
    identification: '',
    address: '',
    phone: '',
    password: '',
    state: true
  };

  constructor(private accountService: ServiceAccountService) {}

  toggleForm() {
    this.showForm = !this.showForm;
    this.customer = {
      name: '',
      gender: 'M',
      age: 0,
      identification: '',
      address: '',
      phone: '',
      password: '',
      state: true
    }; // Limpia el formulario
  }

  onSubmit() {

    if (this.customer.id) {
      // Actualizar cliente existente
      this.accountService.updateCustomer(this.customer).subscribe(() => {
        this.loadCustomers();
        this.toggleForm();
      });
    } else {
      // Guardar nuevo cliente
      this.accountService.saveCustomer(this.customer).subscribe((response) => {
        this.loadCustomers();
        this.toggleForm();
      },
      (error) => {

        //const errorMessages = this.errors.map(err => err.message).join('\n');
    alert("Error al guardar el cliente");
        }
      );
    }
  }


  onEdit(customer: any) {
    this.customer = { ...customer }; // Carga los datos del cliente en el formulario
    this.showForm = true;
  }

  onDelete(id: number) {
    if (confirm('¿Está seguro de eliminar este cliente?')) {
      this.accountService.deleteCustomer(id).subscribe(() => {
        this.loadCustomers();
      });
    }
  }

  loadCustomers() {
    this.accountService.getCustomers().subscribe((customers) => {
      this.dataCustomers = customers;
    });
  }

  ngOnInit() {
    this.loadCustomers();
  }
}
