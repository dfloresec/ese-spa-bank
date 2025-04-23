import { Component, OnInit } from '@angular/core';
import { ServiceAccountService } from '../services/service-account.service';

@Component({
  selector: 'app-create-account',
  imports: [],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent implements OnInit {
 dataAccount:any = []

  constructor(private accountService: ServiceAccountService,) { }
  ngOnInit(): void {
    this.accountService.getAccount("xxxxx").subscribe((data) => {
      console.log("Hola", data);
      this.dataAccount = data;
    })
  }
}
