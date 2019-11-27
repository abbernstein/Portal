import {Component, HostListener, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {Router} from '@angular/router';
import {SureServiceService} from './sure-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {
  title = 'sureportal';
  currentUser: any;

  constructor(
    private router: Router,
    private authenticationService: SureServiceService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {

    const currUrl = window.location.href;

    $(document).on('click', '.edit' , (event: { currentTarget: HTMLInputElement; }) => {
      $(event.currentTarget).closest('tr').find('.data-label').hide();
      $(event.currentTarget).closest('tr').find('.data-field').show();   });

    $(document).on('click', '.add-row-btn' , (event: { currentTarget: HTMLInputElement; }) => {
      debugger;
      $(event.currentTarget).closest('.grid-wrapper').find('.row-to-add').show();
     });


    $(document).on('click', '[aria-expanded]', (event: { currentTarget: HTMLInputElement; }) => {
      debugger;
      const isSelected = $(event.currentTarget).attr('aria-expanded');
      // @ts-ignore
      // tslint:disable-next-line:triple-equals
      $(event.currentTarget).attr('aria-expanded', isSelected == 'false');
      $(event.currentTarget).closest('li').find('.collapse').toggleClass('show');
      return false;
    });
  }
}
