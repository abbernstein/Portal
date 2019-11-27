import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IconsModule } from './icons/icons.module';
import { AccountsComponent } from './accounts/accounts.component';

import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule  } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AccountGatewaysComponent } from './account-gateways/account-gateways.component';
import { AccountServicesComponent } from './account-services/account-services.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {SureServiceService} from './sure-service.service';

import { ReactiveFormsModule } from '@angular/forms';
import { AccountActionsComponent } from './account-actions/account-actions.component';
import { AccountGatewaysStatusesComponent } from './account-gateways-statuses/account-gateways-statuses.component';
import { AccountDevicesStatusesComponent } from './account-devices-statuses/account-devices-statuses.component';
import { PortalUsersComponent } from './portal-users/portal-users.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AccountsComponent,
    AccountGatewaysComponent,
    AccountServicesComponent,
    LoginComponent,
    HomeComponent,
    AccountActionsComponent,
    AccountGatewaysStatusesComponent,
    AccountDevicesStatusesComponent,
    PortalUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    SureServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
