import {Component, OnInit, ViewChild} from '@angular/core';
import {DataTableDirective} from 'angular-datatables';
import {SureServiceService} from '../sure-service.service';

let parameters = {};

// tslint:disable-next-line:class-name
class portalUserDisplay {
  email: string;
  name: string;
  permissionID: string;
}

@Component({
  selector: 'app-portal-users',
  templateUrl: './portal-users.component.html',
  styleUrls: ['./portal-users.component.css']
})
export class PortalUsersComponent implements OnInit {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  users: portalUserDisplay[];
  constructor( private service: SureServiceService) {}

  public insertUser(item) {
    this.service.insertPortalUser(item).subscribe(response => {
      if ( response.isSuccess) {
        $('.row-to-add').hide();
        this.reloadTable();
      }
    });
  }

  public deleteUser(item) {
    this.service.deletePortalUser(item).subscribe(response => {
      if ( response.isSuccess) {
        this.reloadTable();
      }
    });
  }

  public updateUser(item) {
    this.service.updatePortalUser(item).subscribe(response => {
      if ( response.isSuccess) {
        this.reloadTable();
      }
    });
  }

  public reloadTable() {
    const that = this;
    that.service.getAccounts(parameters).subscribe(resp => {
      this.users = resp.data;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.draw('full-hold');
      });
    });
  }
  ngOnInit(): void {
    const that = this;
    $('.user-name').hide();
    $('.user-page-block').hide();
    this.service.getTiers().subscribe(resp => {
      debugger;
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 20,
      serverSide: true,
      processing: true,
      lengthChange: false,
      order: [[ 3, 'asc' ]],
      ajax: (dataTablesParameters: any, callback) => {
        parameters = dataTablesParameters;
        that.service.getPortalUsers(dataTablesParameters).subscribe(resp => {
          that.users = resp.data;
          debugger;
          callback({
            recordsTotal: resp.recordsTotal,
            recordsFiltered: resp.recordsFiltered,
            data: []
          });
        });
      },
      // tslint:disable-next-line:max-line-length
      columns: [{data: '', orderable: false}, { data: '', orderable: false }, {data: '', orderable: false} ,  { data: 'firstName' }, { data: 'lastName' },  { data: 'email' } , {data: 'mobile'} ,  {data: 'address'} , { data: 'thirdPartyAssistant' }]
    };
  }

}
