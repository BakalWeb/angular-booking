import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SideBarMenuItems } from '@core/static/sidebar-menu-items';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <mat-sidenav-container class="sidebar-container" autosize>
      <mat-sidenav
        #sidenav
        opened="true"
        disableClose="true"
        closedStart="false"
        mode="side"
        autoFocus="true"
        class="sidebar"
      >
        <a [routerLink]="['dashboard']" aria-label="Dataphiles logo"
          ><img
            src="../assets/img/logo.png"
            alt="Dataphiles logo"
            class="sidebar-logo"
        /></a>
        <hr />

        <ul class="sidebar-menu">
          <li *ngFor="let item of sidebarMenuItems" class="sidebar-item">
            <a
              [routerLink]="item.routerLink"
              routerLinkActive="active"
              class="sidebar-link"
              matRipple
            >
              <mat-icon class="icon sidebar-icon">{{ item.icon }}</mat-icon>
              {{ item.display }}
            </a>
          </li>
        </ul>
      </mat-sidenav>

      <mat-sidenav-content class="content-container">
        <div
          class="container"
          fxLayout
          fxLayoutAlign="start"
          fxLayoutGap="10px"
          fxLayoutGap.xs="0"
        >
        <div fxFlex="90%">
        <h1 class="current-location">{{currentLocation | titlecase}}</h1></div>
          <div class="sidebar-toggle" fxFlex="50px" fxLayoutAlign="end">
            <button mat-button (click)="sidenavToggle()">
              <mat-icon>{{ icon }}</mat-icon>
            </button>
          </div>
        </div>
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  icon = 'close';
  sidebarMenuItems = SideBarMenuItems;
  currentLocation: string;

  constructor(private router: Router,  private route: ActivatedRoute, private location: Location) {
   this.router.events.subscribe(event => {
    this.currentLocation = (this.location.path().split('/')[1]);
   });
  }

  ngOnInit() {}

  sidenavToggle(): void {
    this.sidenav.toggle();
    this.icon = this.sidenav.opened ? 'close' : 'more_vert';
  }
}
