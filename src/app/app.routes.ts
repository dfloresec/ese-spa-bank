import { Routes } from '@angular/router';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { ManageMovementsComponent } from './manage-movements/manage-movements.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ReportComponent } from './report/report.component';

export const routes: Routes = [
  { path: 'customer-management', component: CustomerManagementComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'manage-movements', component: ManageMovementsComponent },
  { path: 'report', component: ReportComponent },
  { path: '', redirectTo: '/customer-management', pathMatch: 'full' }
];
