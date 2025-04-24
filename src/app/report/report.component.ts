import { Component, OnInit } from '@angular/core';
import { ServiceAccountService } from '../services/service-account.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-report',
  imports: [CommonModule, FormsModule ],
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  dataCustomers: any = [];
  dataAccounts: any = [];
  dataMovements: any = [];
  selectedCustomerId: string = '';
  selectedAccountId: string = '';
  startDate: string = '';
  endDate: string = '';

  constructor(private accountService: ServiceAccountService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.accountService.getCustomers().subscribe((customers) => {
      this.dataCustomers = customers;
    });
  }

  onCustomerChange(): void {
    if (this.selectedCustomerId) {
      this.accountService.getAccounts(this.selectedCustomerId).subscribe((accounts) => {
        this.dataAccounts = accounts;
      });
    }
  }

  onGenerateReport(): void {
    if (this.selectedAccountId && this.startDate && this.endDate) {
      this.accountService
        .getMovements(this.selectedAccountId, this.startDate, this.endDate)
        .subscribe((movements) => {
          this.dataMovements = movements;
        });
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }
}
