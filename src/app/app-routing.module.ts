import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountGatewaysComponent} from './account-gateways/account-gateways.component';
import { AccountServicesComponent} from './account-services/account-services.component';
import { HomeComponent} from './home/home.component';
import { LoginComponent} from './login/login.component';
import {AuthGuard} from './helpers/auth.guard';
import { AccountActionsComponent} from './account-actions/account-actions.component';
import {AccountGatewaysStatusesComponent} from './account-gateways-statuses/account-gateways-statuses.component';
import {AccountDevicesStatusesComponent} from './account-devices-statuses/account-devices-statuses.component';
import {PortalUsersComponent} from './portal-users/portal-users.component';

const routes: Routes = [{ path: '', redirectTo: 'home/dashboard', pathMatch: 'full' },
   {path: 'login', component : LoginComponent},
   {path: 'home', component: HomeComponent,
  children: [
    { path: 'accounts', component: AccountsComponent, },
    { path: 'accountGateways', component: AccountGatewaysComponent },
    { path: 'accountServices', component: AccountServicesComponent },
    { path: 'dashboard', component: DashboardComponent },
    {path: 'accountActions', component: AccountActionsComponent},
    {path: 'accountGatewaysStatuses', component: AccountGatewaysStatusesComponent},
    {path: 'accountDevicesStatuses', component: AccountDevicesStatusesComponent},
    {path: 'portalUsers', component: PortalUsersComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//   canActivate: [AuthGuard]
