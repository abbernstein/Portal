import {Component, OnInit, ViewChild} from '@angular/core';
import {SureServiceService} from '../sure-service.service';
import {DataTableDirective} from 'angular-datatables';
let parameters = {};
const currUserID =  sessionStorage.getItem('currUser');
class DeviceStatus {
  // tslint:disable-next-line:variable-name
   _id: string;
  deviceType: string;
  usageTime: string;

}

@Component({
  selector: 'app-account-devices-statuses',
  templateUrl: './account-devices-statuses.component.html',
  styleUrls: ['./account-devices-statuses.component.css']
})
export class AccountDevicesStatusesComponent implements OnInit {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  devices: DeviceStatus[];
  constructor(private service: SureServiceService ) { }

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
        that.service.getAccountDevicesStatuses(dataTablesParameters, currUserID).subscribe(resp => {
          that.devices = resp.data;
          debugger;
          callback({
            recordsTotal: resp.recordsTotal,
            recordsFiltered: resp.recordsFiltered,
            data: []
          });
        });
      },
      // tslint:disable-next-line:max-line-length
      columns: [{data: '_id'}, { data: 'deviceType' }, {data: 'usageTime'} ]
    };
  }

}
