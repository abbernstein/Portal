import {Component, OnInit, ViewChild} from '@angular/core';
import {DataTableDirective} from 'angular-datatables';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {SureServiceService} from '../sure-service.service';
let parameters = {};
const currUserID =  sessionStorage.getItem('currUser');
class GatewayStatusObj {
  // tslint:disable-next-line:variable-name
  _id: string;
  state: string;
  activationDate: string;

}
@Component({
  selector: 'app-account-gateways-statuses',
  templateUrl: './account-gateways-statuses.component.html',
  styleUrls: ['./account-gateways-statuses.component.css']
})


export class AccountGatewaysStatusesComponent implements OnInit {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  gatewayStatuses: GatewayStatusObj[];
  constructor(private service: SureServiceService) { }

  ngOnInit() {
    const that = this;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 50,
      serverSide: true,
      processing: true,
      lengthChange: false,
       order: [[ 1, 'asc' ]],
      ajax: (dataTablesParameters: any, callback) => {
        parameters = dataTablesParameters;
        that.service.getAccountGateWayStatuses(dataTablesParameters, currUserID).subscribe(resp => {
          that.gatewayStatuses = resp.data;
          debugger;
          callback({
            recordsTotal: resp.recordsTotal,
            recordsFiltered: resp.recordsFiltered,
            data: []
          });
        });
      },
      // tslint:disable-next-line:max-line-length
      columns:   [{ data: '_id' }, { data: 'state' }, {data: 'activationDate'}]
    };
  }

}
