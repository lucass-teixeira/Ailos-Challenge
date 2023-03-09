import { Component, OnInit } from '@angular/core';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  collapsed = false;
  navData = navbarData
  constructor() { }

  ngOnInit(): void {
  }

  toggleColapse() {
    this.collapsed = !this.collapsed;
  }
  closeSideNav() {
    this.collapsed = false;
  }

}
