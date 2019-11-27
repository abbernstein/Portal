import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const currUrl = window.location.href;
    const userNameHeader =  sessionStorage.getItem('currUserName');
    debugger;
    if (userNameHeader != null) {
      $('.user-name').text(userNameHeader);
    }

    $('.nav-link').each(function() {
      const href = $(this).attr('href');
      if (href != null) {
        // tslint:disable-next-line:triple-equals
        // tslint:disable-next-line:triple-equals
        if (currUrl.indexOf(href) != -1) {
          $(this).addClass('active');
          $(this).closest('.collapse').addClass('show');
          debugger;
          $(this).closest('ul').closest('li').find('[aria-expanded]').attr('aria-expanded', 'true');
        }
      }
    });
  }

}
