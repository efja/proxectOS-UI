import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(
    private translate: TranslateService,
  ) { }

  ngOnInit(): void {
    this.items = [
      // {
      //   label: 'MENU.HOME',
      //   icon: 'pi pi-home',
      //   routerLink : '/',
      // },
      {
        label: 'MENU.ME',
        icon: 'pi pi-user',
        routerLink : '/',
      },
      {
        label: 'MENU.ADMIN',
        icon: 'pi pi-cog',
        routerLink : '/admin',
      },
      // {
      //   label: 'MENU.SUMMARY',
      //   icon: 'pi pi-chart-bar',
      //   routerLink : '/summaries',
      // },
    ];

    this.items.forEach(item => {
      const itemLabel: string = item.label || '';

      this.translate.get(itemLabel).subscribe((text) => {
        item.label = text;
      });

      // TODO: refactorizar para crear algún tipo de método recurisvo para non ter que facer 2 bucles idénticos
      if (item.items) {
        item.items.forEach(child => {
          const childLabel: string = child.label || '';

          this.translate.get(childLabel).subscribe((text) => {
            child.label = text;
          });
        });
      }
    });
  }
}
