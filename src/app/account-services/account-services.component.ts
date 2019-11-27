import {Component, OnInit, ViewChild} from '@angular/core';
import {SureServiceService} from '../sure-service.service';
import { DataTableDirective } from 'angular-datatables';

class Service {
  serviceID: string;
  serviceDescription: string;
  services: DropDownObj[];
  userID: string;
}
let parameters = {};

const currUserID =  sessionStorage.getItem('currUser');

class DropDownObj {
  description: string;
  // tslint:disable-next-line:variable-name
  _id: string;
}


@Component({
  selector: 'app-account-services',
  templateUrl: './account-services.component.html',
  styleUrls: ['./account-services.component.css']
})


export class AccountServicesComponent implements OnInit {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  services: Service[];
  dropdownServices: DropDownObj[];
  constructor(private service: SureServiceService ) { }

  public reloadTable() {
    const that = this;
    that.service.getAccountServices(parameters, currUserID).subscribe(resp => {
      this.services = resp.data;

      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.draw('full-hold');
      });
    });
  }

  public insertService() {
    const service = new Service();
    service.serviceID = $('#serviceID').val() as string;
    service.userID = currUserID;
    debugger;
    this.service.insertAccountService(service).subscribe(response => {
      if ( response.isSuccess) {
        this.reloadTable();
        $('.row-to-add').hide();
       // this.dtOptions.drawCallback
       // this.dtOptions.renderer()
      }
    });
  }

  public updateService(item) {
    this.service.updateAccountService(item).subscribe(response => {
      if ( response.isSuccess) {
        this.reloadTable();
      }
    });
  }

  public deleteService(item) {
    this.service.deleteAccountService(item).subscribe(response => {
      if ( response.isSuccess) {
        this.reloadTable();
      }
    });
  }

  ngOnInit() {


    const that = this;
    this.dtOptions = {
      searching: false,
      pagingType: 'full_numbers',
      pageLength: 20,
      serverSide: true,
      processing: true,
      lengthChange: false,
      order: [[ 3, 'asc' ]],
      ajax: (dataTablesParameters: any, callback) => {
        parameters = dataTablesParameters;
        that.service.getAccountServices(dataTablesParameters, currUserID).subscribe(resp => {
          that.services = resp.data;
          debugger;
          callback({
            recordsTotal: resp.recordsTotal,
            recordsFiltered: resp.recordsFiltered,
            data: []
          });
        });
      },
      // tslint:disable-next-line:max-line-length
      columns: [{data: '', orderable: false}, { data: '', orderable: false }, {data: '', orderable: false} ,  { data: 'serviceID', width: '80%' }]
    };

    this.service.getServices().subscribe(response => {
      this.dropdownServices = response;
      debugger;
    });
  }

}
