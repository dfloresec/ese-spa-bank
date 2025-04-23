import { Component, OnInit } from '@angular/core';
import { ServiceAccountService } from '../services/service-account.service';

@Component({
  selector: 'app-customer-management',
  imports: [],
  templateUrl: './customer-management.component.html',
  styleUrl: './customer-management.component.css'
})
export class CustomerManagementComponent implements OnInit {

  dataAccount:any = []

  constructor(private accountService: ServiceAccountService,) { }
  ngOnInit(): void {
    this.accountService.getAccount("xxxxx").subscribe((data) => {
      console.log("Hola", data);
      this.dataAccount = data;
    })
  }

}
