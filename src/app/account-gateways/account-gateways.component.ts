import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {SureServiceService} from '../sure-service.service';
import { DataTableDirective } from 'angular-datatables';
let parameters = {};
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

class Gateway {
  gatewayID: string;
}

@Component({
  selector: 'app-account-gateways',
  templateUrl: './account-gateways.component.html',
  styleUrls: ['./account-gateways.component.css']
})
export class AccountGatewaysComponent implements OnInit {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  gateways: Gateway[];
    constructor(private service: SureServiceService ) { }

    public reloadTable() {
      const that = this;
      that.service.getAccountGateWays(parameters).subscribe(resp => {
        this.gateways = resp.data;
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.draw('full-hold');
        });
      });
    }

    public insertGateway() {
        const gateway = new Gateway();
        gateway.gatewayID = $('#gatewayID').val() as string;
        this.service.insertAccountGateway(gateway).subscribe(response => {
          response.isSuccess === false ? alert('הפעולה נכשלה') : alert('הפעולה הושלמה בהצלחה');
          if ( response.isSuccess) {
            this.reloadTable();
          }
        });
    }

  public updateGateway(item) {
    this.service.updateAccountGateway(item).subscribe(response => {
      response.isSuccess === false ? alert('הפעולה נכשלה') : alert('הפעולה הושלמה בהצלחה');
      if ( response.isSuccess) {
        this.reloadTable();
      }
    });
  }

  public deleteGateway(item) {
    this.service.deleteAccountGateway(item).subscribe(response => {
      response.isSuccess === false ? alert('הפעולה נכשלה') : alert('הפעולה הושלמה בהצלחה');
      if ( response.isSuccess) {
        this.reloadTable();
      }
    });
  }


  ngOnInit() {
    const that = this;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 50,
      serverSide: true,
      processing: true,
      lengthChange: false,
      order: [[ 3, 'asc' ]],
      ajax: (dataTablesParameters: any, callback) => {
        parameters = dataTablesParameters;
        that.service.getAccountGateWays(dataTablesParameters).subscribe(resp => {
          that.gateways = resp.data;
          debugger;
          callback({
            recordsTotal: resp.recordsTotal,
            recordsFiltered: resp.recordsFiltered,
            data: []
          });
        });
      },
      // tslint:disable-next-line:max-line-length
      columns: [{data: '', orderable: false}, { data: '', orderable: false }, {data: '', orderable: false} ,  { data: 'gatewayID', width: '80%' }]
    };
  }

}
