import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'page-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  public ngOnInit() {
    $(document).ready(function() {
      $('.logo-contents').clone()
        .removeClass('logo-contents')
        .addClass('logo-shadow')
        .appendTo('.logo-container');
    });
  }
}
