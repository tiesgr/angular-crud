import { Direction } from '@angular/cdk/bidi';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  public isScreenSmall!: boolean;
  isDarkTheme: boolean = false;
  showFiller = false;

  constructor(private breakpointObserver: BreakpointObserver) { }
  @ViewChild(MatDrawer)
  sidenav!: MatDrawer;
  direction: Direction = 'ltr';


  ngOnInit(): void {
    this.breakpointObserver
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });
    // this.users = this.userService.users;
    // this.userService.loadAll();

    // this.router.events.subscribe(() => {
    if (this.isScreenSmall) {
      //TODO close our sidenav
      this.sidenav.close();
    }
    // });
  }
}
