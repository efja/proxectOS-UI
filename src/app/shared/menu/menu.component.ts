import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Test',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Test2',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
        ]
      },
    ];
  }
}
