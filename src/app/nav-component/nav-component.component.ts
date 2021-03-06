import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.scss']
})
export class NavComponentComponent implements OnInit {

  collapsed = true;

  constructor() { }

  ngOnInit() {
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
}
